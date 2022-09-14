json.extract! @comment, :id, :author_id, :listing_id, :body
json.author @comment.author.username