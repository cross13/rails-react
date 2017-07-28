class CreateUserQueries < ActiveRecord::Migration[5.1]
  def change
    create_table :user_queries do |t|
      t.string :subject
      t.text :content
      t.string :email

      t.timestamps
    end
  end
end
