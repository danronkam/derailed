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
    Comment.destroy_all

  
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

    buyer_1 = User.create(username: "low-baller", email: "lb@demo.com", password: "password")
    buyer_2 = User.create(username: "btch", email: "btch@demo.com", password: "password")
    buyer_3 = User.create(username: "yourfashionarchive", email: "yfa@demo.com", password: "password")
    buyer_4 = User.create(username: "outlawarchive", email: "outlaw@demo.com", password: "password")


    shop_1 = User.create(username: "toyoji", email: "toyoji@demo.com", password: "password")
    shop_2 = User.create(username: "maskSF", email: "mask@demo.com", password: "password")
    shop_3 = User.create(username: "noausterity", email: "noausterity@demo.com", password: "password")
    shop_4 = User.create(username: "RuePorter", email: "rueporter@demo.com", password: "password")

    demo_listing1 = Listing.create!({
      title: 'DEADSTOCK Horsebit Gucci Loafers', 
      user_id: 1, 
      price: 10, 
      shipping_price: 5, 
      designer_brand: 'Gucci', 
      size: '6', 
      category: 'Footwear', 
      condition: 'New/Never Worn', 
      sub_category: 'Loafers', 
      color: 'Black',
      country: 'Canada',
      description: 'damn thats crazy'})

      
    file1 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/P00461579_b2.jpg")

    demo_listing1.photo.attach(io: file1, filename: 'gucci_shoes.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 1})
#________________________________________________________________________________________________________________

    demo_listing2 = Listing.create!({
      title: 'Paul Frank Industries Hoodie', 
      user_id: 5, 
      price: 15, 
      shipping_price: 5, 
      designer_brand: 'Vintage', 
      size: 'M', category: 'Tops', 
      condition: 'Gently Used', 
      sub_category: 'Shirt', 
      color: 'Grey',
      country: 'United States',
      description: 'damn thats crazy'})

      
      file2 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/vintage+Paul+Frank+industries+army+monkey+hoodie.webp')

      demo_listing2.photo.attach(io: file2, filename: 'paul_frank_hoodie.jpg')
      Comment.create({body: 'HARD', author_id:5, listing_id: 2})

#________________________________________________________________________________________________________________

    demo_listing3 = Listing.create!({
      title: 'Stussy Ransom Jacquard Tie', 
      user_id: 5, 
      price: 50, 
      shipping_price: 0, 
      designer_brand: 'Stussy', 
      size: 'OS', category: 'Accessories', 
      condition: 'New/Never Worn', 
      sub_category: 'Shirt', 
      color: 'Black',
      country: 'United States',
      description: 'damn thats crazy'})

      
      file3 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/St%C3%BCssy+Ransom+Jacquard+Tie.webp')

      demo_listing3.photo.attach(io: file3, filename: 'stussy_tie.jpg')
      Comment.create({body: 'good deal IMO', author_id:6, listing_id: 3})

#________________________________________________________________________________________________________________

    demo_listing4 = Listing.create!({
      title: '2000s Vintage TUMI Black Traveler Cargo Vest', 
      user_id: 5, 
      price: 200, 
      shipping_price: 20, 
      designer_brand: 'Tumi', 
      size: 'S', category: 'Outerwear', 
      condition: 'Gently Used', 
      sub_category: 'Vest', 
      color: 'Black',
      country: 'United States',
      description: '2000s Vintage TUMI Black Traveler Cargo Vest

      Please ask if you have any questions.'})

      
    file4 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/2000s+Vintage+TUMI+Black+Traveler+Cargo+Vest.webp')

    demo_listing4.photo.attach(io: file4, filename: 'tumi_vest.jpg')
    Comment.create({body: 'no way ur serious with this price', author_id:1, listing_id: 4})
    Comment.create({body: '$50? lmk', author_id:1, listing_id: 4})

#________________________________________________________________________________________________________________

    demo_listing5 = Listing.create!({
      title: '2004 Helmut Lang “Cowboy” T-Shirt', 
      user_id: 7, 
      price: 600, 
      shipping_price: 7, 
      designer_brand: 'Helmut Lang', 
      size: 'S', category: 'Tops', 
      condition: 'Used', 
      sub_category: 'Shirt', 
      color: 'White',
      country: 'United States',
      description: "Iconic 2004 Helmut Lang 'Cowboy' T-Shirt From The Original Release.

      Not Re-Edition. Currently NFS (Away From Home).
      
      Labeled Size XS. Fits S TTS. 8/10 Condition. Yellowing + Wear As To Be Expected After Almost 20+ Years.
      
      DM For Purchase / Rental Inquiries.
      
      International Buyers – Please Note:
      Import duties, taxes, and charges are not included in the item price or shipping cost. These charges are the buyer's responsibility.
      Please check with your country's customs office to determine what these additional costs will be prior to bidding or buying.
      
      Best,
      Kollaps Corp."})

      
    file5 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/2004+Helmut+Lang+%E2%80%9CCowboy%E2%80%9D+T-Shirt.webp')

    demo_listing5.photo.attach(io: file5, filename: 'cowboy_hl.jpg')
    Comment.create({body: 'no way ur serious with this price', author_id:1, listing_id: 5})
    Comment.create({body: '$? lmk', author_id:1, listing_id: 5})
#________________________________________________________________________________________________________________

    demo_listing6 = Listing.create!({
      title: 'Gel Kayano 14 Silver White', 
      user_id: 5, 
      price: 350, 
      shipping_price: 20, 
      designer_brand: 'Jjjjound', 
      size: '12', category: 'Footwear', 
      condition: 'New', 
      sub_category: 'Low Top Sneaker', 
      color: 'Silver',
      country: 'United States',
      description: 'jjjjound x Asics Gel Kayano 14 in Silver/White. Just purchased today, will ship as soon as I receive them.'})

      
    file6 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/Asics+%C3%97+Jjjjound+Gel+Kayano+14+Silver+White.webp')

    demo_listing6.photo.attach(io: file6, filename: 'jound_ascics.jpg')
    Comment.create({body: 'no way ur serious with this price', author_id:1, listing_id: 6})
    Comment.create({body: '$50? lmk', author_id:1, listing_id: 6})
#________________________________________________________________________________________________________________

    demo_listing7 = Listing.create!({
      title: 'Comme Des Garçons Homme Plus Suit (Jacket & Pants) Sz Large', 
      user_id: 7, 
      price: 1250, 
      shipping_price: 0, 
      designer_brand: 'Comme Des Garçons', 
      size: '34R', category: 'Tailoring', 
      condition: 'New', 
      sub_category: 'Suits', 
      color: 'Grey',
      country: 'United States',
      description: 'NEW w TAG

      Jacket: XJ-01012L
      
      Material: 44% cotton 28% wool 28% mohair
      
      Size: L
      
      Shoulder to shoulder: 19 inches
      
      Shoulder to cuff: 27 inches
      
      Chest: 22 inches
      
      Length: 33 inches
      
      Pants: XP-01006L
      
      Material: 44% cotton 28% wool 28% mohair
      
      Size: L
      
      Waist: 34 inches
      
      Length: 46 inches
      
      Inseam: 34 inches
      
      New with tags
      
      Any questions, please ask.'})

      
    file7 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/Comme+Des+Gar%C3%A7ons+Homme+Plus+Suit+(Jacket+%26+Pants)+Sz+Large.webp')
    Comment.create({body: 'no way ur serious with this price', author_id:1, listing_id: 7})
    Comment.create({body: '$50? lmk', author_id:1, listing_id: 7})

    demo_listing7.photo.attach(io: file7, filename: 'cdg_suit.jpg')
#________________________________________________________________________________________________________________

    demo_listing8 = Listing.create!({
      title: 'Dries Van Noten Black Strap Harness Shirt', 
      user_id: 7, 
      price: 250, 
      shipping_price: 8, 
      designer_brand: 'Dries Van Noten', 
      size: 'XS', category: 'Tops', 
      condition: 'Preowned', 
      sub_category: 'Button Up Shirt', 
      color: 'Black',
      country: 'Canada',
      description: 'Harness Shirt from Dries Van Noten

      Size: 44 (XS-S, Fits TTS)
      Condition: 8/10 (lost the front piece that covers the top button, otherwise condition is flawless)
      
      *US Shipping preferably'})

      
    file8 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/Dries+Van+Noten+Black+Strap+Harness+Shirt.webp')

    demo_listing8.photo.attach(io: file8, filename: 'dvn_harness.jpg')
    Comment.create({body: 'no way ur serious with this price', author_id:1, listing_id: 8})
    Comment.create({body: '$50? lmk', author_id:1, listing_id: 8})
#________________________________________________________________________________________________________________

    demo_listing9 = Listing.create!({
      title: 'AW 2006-2007 MARTIN MARGIELA X H&M faceless watch bracelet', 
      user_id: 7, 
      price: 350, 
      shipping_price: 0, 
      designer_brand: 'Maison Margiela', 
      size: 'OS', category: 'Accessories', 
      condition: 'Gently Used', 
      color: 'Silver',
      country: 'United States',
      sub_category: 'Watches', 
      description: 'AW 2006-2007 MARTIN MARGIELA X H&M faceless watch bracelet.
      This bracelet is a re-edition of a Martin Margiela faceless watch bracelet from Autumn-Winter 2006-2007 collection, part of the 2012 Maison Martin Margiela X H&M collection.
      Condition 8/10, few scuffs and marks, see pictures.
      Stainless steel, 13 cm long open / 10 cm long closed, bracelet is 1,7 cm wide and watch is 3,5 cm wide.
      
      Combined shipping is possible.
      All sales are final, no return.
      Ask anything you need to know on sizing, details or condition before purchase.'})

      
    file9 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/H%26M+x+Margiela+Open+Clasp+Watch+Bracelet.webp')

    demo_listing9.photo.attach(io: file9, filename: 'faceless.jpg')
    Comment.create({body: 'no way ur serious with this price', author_id:1, listing_id: 9})
    Comment.create({body: '$50? lmk', author_id:1, listing_id: 9})
#________________________________________________________________________________________________________________

    demo_listing10 = Listing.create!({
      title: 'Issey Miyake Homme Plisse Blazer', 
      user_id: 7, 
      price: 600, 
      shipping_price: 0, 
      designer_brand: 'Issey Miyake', 
      size: 'XL', category: 'Outerwear', 
      condition: 'Used', 
      sub_category: 'Light Jackets', 
      color: 'Black',
      country: 'United States',
      description: 'Pre-owned, but in excellent condition. Worn only a few times with no flaws. Tagged as size 4 (fits M - L, more on the L side).'})

      
    file10 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/Issey+Miyake+Homme+Plisse+Blazer.webp')

    demo_listing10.photo.attach(io: file10, filename: 'plisse_blazer.jpg')
    Comment.create({body: 'no way ur serious with this price', author_id:1, listing_id: 10})
    Comment.create({body: '$50? lmk', author_id:1, listing_id: 10})
#________________________________________________________________________________________________________________
    demo_listing11 = Listing.create!({
      title: 'Nike Dunk Low Panda', 
      user_id: 8, 
      price: 180, 
      shipping_price: 12, 
      designer_brand: 'Nike', 
      size: '10', category: 'Footwear', 
      condition: 'Used', 
      sub_category: 'Sneakers', 
      color: 'Black',
      country: 'United States',
      description: 'Size 10 Mens, 11.5 Woman’s

      slightly damaged box shown
      
      No lowballs
      
      Send offers
      
      Same/Next day shipping. USA shipping ONLY.
      
      All sales final. No returns or refunds. All sales must be checked out through grailed. Do not ask to purchase through paypal or another website.
      
      While I do guarantee authenticity, I do not offer returns on my items as long as you receive what was listed in the pictures and description. A piece not fitting is not an appropriate reason for a return. Thank you for understanding'})

      
    file11 = URI.open('https://derailed-seed.s3.us-west-1.amazonaws.com/Nike+Dunk+Low+Panda.webp')

    demo_listing11.photo.attach(io: file11, filename: 'nike_panda.jpg')
    Comment.create({body: 'no way ur serious with this price', author_id:1, listing_id: 11})
    Comment.create({body: '$50? lmk', author_id:1, listing_id: 11})
#________________________________________________________________________________________________________________


    # More users
    # 10.times do 
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   }) 
    # end
  
    puts "Done!"
  end