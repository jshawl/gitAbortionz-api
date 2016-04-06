class AddColumnsToStates < ActiveRecord::Migration
  def change
    add_column :states, :roe_repeal, :string
    add_column :states, :state_restrict, :string
    add_column :states, :save_self, :string
    add_column :states, :state_ban, :string
    add_column :states, :counseling, :string
    add_column :states, :waiting_period, :string
    add_column :states, :two_trips, :string
  end
end
