class StatesController < ActionController::Base

def index
  respond_to do |format|
    format.html
    format.json{render json: State.all}
  end
end

end
