class StateController < ActionController::Base
  has_many :comments

def index
  respond_to do |format|
    format.html
    format.json{render json: State.all}
  end
end

end
