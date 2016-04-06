class CommentsController < ActionController::Base

def index
  @post = Post.find(params[:post_id])
  @comments = @post.comments
render json: @post.comments
end

end
