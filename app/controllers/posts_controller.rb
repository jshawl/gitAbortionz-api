class PostsController < ActionController::Base

  def index
    respond_to do |format|
      format.html
      format.json{render json: Post.all}
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.create(post_params)
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
