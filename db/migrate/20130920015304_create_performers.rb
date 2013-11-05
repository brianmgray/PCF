class CreatePerformers < ActiveRecord::Migration
  def change
    create_table :performers do |t|
      t.string :name
      t.string :twitter
      t.string :email
      t.string :bio

      t.timestamps
    end
  end
end
