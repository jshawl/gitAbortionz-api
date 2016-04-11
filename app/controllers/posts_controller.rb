class PostsController < ActionController::Base

  def index
    render json: Post.all
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = Post.create(post_params)
    # render json: @post when successful
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    redirect_to post_url
  end

  def destroy
    Post.destroy(params[:id])
    render json: {success: true}, status: :ok
  end



private

def post_params
  params.require(:post).permit(:author, :title, :content, :created_at, :updated_at)
end

end
