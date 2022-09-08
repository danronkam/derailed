# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Listing.destroy_all
    User.destroy_all

  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    # User.create!(
    #   username: 'low-baller', 
    #   email: 'lb@demo.com', 
    #   password: 'password'
    # )

    demo_user = User.create(username: "low-baller", email: "lb@demo.com", password: "password")

    shop1 =     demo_user = User.create(email: "toyoji@demo.com", password: "password")

    shop2 =     demo_user = User.create(email: "mask@demo.com", password: "password")

    demo_listing = Listing.create!({
      title: 'DEADSTOCK Horsebit Gucci Loafers', 
      user_id: 1, 
      price: 10, 
      shipping_price: 5, 
      designer_brand: 'gucci', 
      size: '6', category: 'Shoes', 
      condition: 'new', 
      sub_category: 'Loafers', 
      description: 'damn thats crazy'})

    demo_listing1 = Listing.create!({
      title: 'Paul Frank Industries Hoodie', 
      user_id: 2, 
      price: 15, 
      shipping_price: 5, 
      designer_brand: 'vintage', 
      size: 'M', category: 'Tops', 
      condition: 'used', 
      sub_category: 'Shirt', 
      description: 'damn thats crazy'})

    demo_listing2 = Listing.create!({
      title: 'Stussy Ransom Jacquard Tie', 
      user_id: 3, 
      price: 50, 
      shipping_price: 0, 
      designer_brand: 'Stussy', 
      size: 'OS', category: 'Accessories', 
      condition: 'used', 
      sub_category: 'Shirt', 
      description: 'damn thats crazy'})

    # file = open('https://derailed-seed.s3.us-west-1.amazonaws.com/P00461579_b2.jpg')

    # demo_user.avatar.attach(io: file, filename: 'gucci_shoes.jpg')
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Done!"
  end