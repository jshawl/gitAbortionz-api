class StatesController < ApplicationController

  before_action do
    if params[:name]
      @state = State.find(params[:name])
    end
  end

def index
  respond_to do |format|
    format.html
    format.json{render json: State.all}
  end
end

def show
  @state = State.find_by(:state_id=>params[:id])
  render json: @state, status: :ok
end

end
