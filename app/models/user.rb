class User < ApplicationRecord
    has_secure_password

    validates :username, 
        uniqueness: true, 
        length: { in: 3..30 }, 
        format: { without: URI::MailTo::EMAIL_REGEXP, message:  "username can't be an email" }
    validates :email, 
        uniqueness: true, 
        length: { in: 3..255 }, 
        format: { with: URI::MailTo::EMAIL_REGEXP }

    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true

    before_validation :ensure_session_token

    def self.find_by_credentials(credential, password) 
        if (credential =~ URI::MailTo::EMAIL_REGEXP) != nil
          field = :email
        else
          field = :username
        end
        user = User.find_by(field => credential)
        user && user.authenticate(password)
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
      end
    
    
      def generate_unique_session_token
        while true
          token = SecureRandom::urlsafe_base64
          return token unless User.exists?(session_token: token)
        end
      end
    
      def ensure_session_token
        self.session_token ||= generate_unique_session_token
      end
end
