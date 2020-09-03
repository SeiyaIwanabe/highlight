# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## DB設計


## usersテーブル

| Column | Type | Options|
|--------|------|--------|
|nickname|string|null: false|
|email|string|null: false, unique: true, index: true|
|password|string|null: false|

### Association
- has_many :posts
- has_many :favorites, dependent: :destroy
- has_many :comments, dependent: :destroy
- has_one :profile, dependent: :destroy



## postsテーブル

| Column | Type | Options|
|--------|------|--------|
|content|string|null: false|
|image|string|null: false|

### Association

- has_many :comments, dependent: :destroy
- has_many :favorites
- belongs_to :user



## commentsテーブル(中間テーブル)

| Column | Type | Options|
|--------|------|--------|
|user_id|string|references, null: false, foreign_key: true|
|post_id|string|references, null: false, foreign_key: true|
|comment|text|null: false|
|created_at|timestamp|null: false|

### Association

- belongs_to :user
- belongs_to :post




## favoritesテーブル

| Column | Type | Options|
|--------|------|--------|
|user_id|string|references, null: false, foreign_key: true|
|post_id|string|references, null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :post



## profilesテーブル

| Column | Type | Options|
|--------|------|--------|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|birth_year|date|null: false|
|birth_month|date|null: false|
|birth_day|date|null: false|
|introduction|text||
|image|string||  
|user_id|string|references, null: false, foreign_key: true|


### Association
- belongs_to :user
