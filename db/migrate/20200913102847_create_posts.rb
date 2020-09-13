class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :subtitle
      t.text :content, null: false
      t.string :image
      t.string :video
      # t.references :user, type: :bigint, foreign_key: true
      # t.references :group, type: :bigint, foreign_key: true
      t.timestamps
    end
  end
end
