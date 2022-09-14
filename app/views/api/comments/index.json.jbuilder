@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :author_id, :listing_id, :body
        json.author comment.author.username
    end
end