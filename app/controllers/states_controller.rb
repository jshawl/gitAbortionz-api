class StatesController < ApplicationController

def index
  @states = State.all
  respond_to do |format|
    format.html
    format.json{render json: State.all}
  end
end

def show
  @state = State.find(params[:state_id])
  # render json: @state, status: :ok
end

end
