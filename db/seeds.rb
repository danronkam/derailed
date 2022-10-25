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
      title: '42 VOTC HEDI SLIMANE AW04 SUEDE CALF BOOT', 
      user_id: 5, 
      price: 320, 
      shipping_price: 0, 
      designer_brand: 'Dior', 
      size: '9', 
      category: 'Boots', 
      condition: 'Gently Used', 
      sub_category: 'Suede', 
      color: 'Beige',
      country: 'Europe',
      description: 'MARKED AN EU 42 FITS A US10

	VERY GOOD CONDITION

	HEDI SLIMANE ERA CHRISTIAN DIOR AW04
	"VICTIM OF THE CRIME" RUNWAY SHOW PIECE

	RESOLED FROM THE BRITTLE CREPE SOLE

	NEW WELTED SOLE IS HIGH QUALITY AND FOLLOWS THE SAME COLOUR AS THE ORIGINAL

	SOLE SHOWS SOME SCUFFING. WORN TWICE SINCE RESOLING.'})
    
      
    	file1 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/Asics+%C3%97+Jjjjound+Gel+Kayano+14+Silver+White.webp")

    demo_listing1.photo.attach(io: file1, filename: 'dior_heidi.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 1})

# -----------------------------------------------------------------------------------------------------------------------------

    demo_listing2 = Listing.create!({
      title: 'CHUNKY-SOLE LEATHER BOOTS', 
      user_id: 5, 
      price: 628, 
      shipping_price: 20, 
      designer_brand: 'RickOwens', 
      size: '13', 
      category: 'Boots', 
      condition: 'New', 
      sub_category: 'Leather', 
      color: 'Black',
      country: 'Europe',
      description: 'IF YOU WANT TO BUY THIS ITEM,PLEASE READ THIS

CONDITION AND SIZE
CAREFULLY CHECK SIZE AND CONDITION BEFORE PURCHASE.

SHIPPING
1.WE DONT SHIPPING WITHOUT PHONE NUMBER AND EMAIL.
2.SHIPPING ONLY VIA UPS EXPRESS SERVICE ALL AROUND THE WORLD
EXPRESS-ONE WEEK SHIPPING ALL AROUND THE WORLD
AND WE HAVE TWO DAYS SHIPPING FOR EXTRA FEE!

TAXES
1.YOU PAY TAXES ACCORDING TO SITE RULES WHEN YOU BUYING
2.WHEN YOU RECEIVE THE ITEM, YOU DO NOT PAY TAXES

RETURNS
1.WE ACCEPT RETURNS FOR ANY REASON
You just need write in dm and we will agree how we will do it.
Refunds will be made within 7 business days of receiving the item by us.'})

      
    file2 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/2.jpg")

    demo_listing2.photo.attach(io: file2, filename: 'RickMartins.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 1})

# -----------------------------------------------------------------------------------------------------------------------------
    demo_listing3 = Listing.create!({
      title: 'Rick Owens Pink Pony Hair Geobaskets', 
      user_id: 5, 
      price: 1850, 
      shipping_price: 50, 
      designer_brand: 'RickOwens', 
      size: '10', 
      category: 'Sneakers', 
      condition: 'New', 
      sub_category: 'Hi Top Sneakers', 
      color: 'Pink',
      country: 'Europe',
      description: 'Selling these brand new, never worn pairs of Rick Owens FW22 "STROBE" Runway Geobaskets Sneakers in the Dirty Pink colourway. This leather is a hair-on cowhide.

Comes with original box, pink laces and totebag.

Size: 43

COLOR: DIRTY PINK/MILK WHITE
MATERIAL: UPPER 100% COW REAL FUR
TOE 100% CALF LEATHER
LINING 100% CALF LEATHER
INSOLE 100% CALF LEATHER
SOLE 100% RUBBER

Shipping tracked from Sweden. DHL Express shipping avaliable for a extra fee as well.

Serious offers welcome but im not accepting lowballs.
Message me on lG for a faster response @olofhohner

All sales final. No returns/refunds. No exchanges. Under any circumstance.
Please message me if you have any questions, thanks.'})

      
    file3 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/3.jpg")

    demo_listing3.photo.attach(io: file3, filename: 'RickPink.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 3})
# -----------------------------------------------------------------------------------------------------------------------------
    demo_listing4 = Listing.create!({
      title: '1/100 Limited Edition destroyed trashed white paris sneakers', 
      user_id: 6, 
      price: 3000, 
      shipping_price: 80, 
      designer_brand: 'Balenciaga', 
      size: '8', 
      category: 'Sneakers', 
      condition: 'New', 
      sub_category: 'Hi Top Sneakers', 
      color: 'White',
      country: 'Europe',
      description: 'Balenciaga by Demna Gvasalia. These are the limited 1/100 trashed Paris sneakers in the dirty white (yellow) version! The concept behind these destroyed sneakers is to search for the beauty in imperfection and accept the more natural cycle of life. It reminds us that all things including us and life itself, are impermanent, incomplete, and imperfect. Perfection, then, is impossible and impermanence is the only way. 🖤

As seen on Mr Vert (Lil Uzi)

Limited to 100 pairs
Size 41 (fit large ideal for US8.5-9)
brand new with box & dustbags'})

      
    file4 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/4.jpg")

    demo_listing4.photo.attach(io: file4, filename: 'trash.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 4})
# -----------------------------------------------------------------------------------------------------------------------------
    demo_listing5 = Listing.create!({
      title: "2006 N*E*R*D X BAPESTA FS-001 LOW 'RED' US 8.5", 
      user_id: 6, 
      price: 17500, 
      shipping_price: 0, 
      designer_brand: 'Bape', 
      size: '8.5', 
      category: 'Sneakers', 
      condition: 'Gently Used', 
      sub_category: 'Low Top Sneakers', 
      color: 'Red',
      country: 'United States',
      description: "N*E*R*D X BAPESTA FS-001 LOW 'RED'

size 8.5 US

released in 2006

these are straight from Shae Haley's personal collection

thats right, 1/3 of N*E*R*D

Shae Haley, Pharrell Williams, and Chad Hugo made up the band N*E*R*D

the lineage of these shoes are unmatched

limited to 100 pairs made

major collectors item

these were partially released by raffle at BAPE stores & select streetwear retailers that were chosen by Nigo & Pharrell

the rest were gifted to friends and family

hence Shae owning a pair

patent leather upper

N*E*R*D 'brain' graphic embroidered on the heel

BAPE has since been attempted to retro this colorway, but never with the N*E*R*D 'brain' motif

it is amazing that the patent leather has not been cracked and entirely destroyed considering that they are 16 years old

but that is because they have been properly stored in a climate controlled storage unit that entire time (aside from Shae wearing them once)

pre-owned

no major flaws

light signs of wear / dirt

any visible flaws are shown in pictures

original box NOT included - replacement box will be included

plenty of life left

100% authentic

premium quality

& FREE SHIPPING IN USA
SIGNATURE CONFIRMATION WILL BE APPLIED TO PACKAGE UPON REQUEST

hmu

#hangdryy

*in hand & ready to ship
*free stickers included with all orders
*ships in a sealed bag within the package for protection
*ALL SALES ARE FINAL*"})

      
    file5 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/5.jpg")

    demo_listing5.photo.attach(io: file5, filename: 'bapesta.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 5})
# -----------------------------------------------------------------------------------------------------------------------------
    demo_listing6 = Listing.create!({
      title: 'Rick Owens 09AW Mainline Ramones Black B340', 
      user_id: 7, 
      price: 1395, 
      shipping_price: 30, 
      designer_brand: 'RickOwens', 
      size: '11', 
      category: 'Sneakers', 
      condition: 'Gently Used', 
      sub_category: 'Hi Top Sneakers', 
      color: 'Black',
      country: 'Asia',
      description: 'Rick Owens 09AW Mainline Ramones Black B340
-Size: 44
-Calf leather'})

      
    file6 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/6.jpg")

    demo_listing6.photo.attach(io: file6, filename: 'RORamone.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 6})
# -----------------------------------------------------------------------------------------------------------------------------
    demo_listing7 = Listing.create!({
      title: 'New! Derby', 
      user_id: 7, 
      price: 800, 
      shipping_price: 30, 
      designer_brand: 'ThomBrowne', 
      size: '11.5', 
      category: 'Casual Leather Shoes', 
      condition: 'New', 
      sub_category: 'Leather', 
      color: 'Black',
      country: 'Europe',
      description: 'Item: thom brown derby
Size: 11.5
Condition: new with box
no trades'})

      
    file7 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/7.jpg")

    demo_listing7.photo.attach(io: file7, filename: 'TBDB.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 7})
# -----------------------------------------------------------------------------------------------------------------------------
    demo_listing8 = Listing.create!({
      title: 'CANCELLED 1/15 Rodeo Santiag Boots Brand New', 
      user_id: 7, 
      price: 5000, 
      shipping_price: 55, 
      designer_brand: 'Balenciaga', 
      size: '10', 
      category: 'Boots', 
      condition: 'New', 
      sub_category: 'Leather', 
      color: 'Black',
      country: 'UK',
      description: 'Cancelled calfskin leather rodeo santiag boots from the Summer 2022 red carpet collection

These boots were only made available to VIP clients who pre-ordered them. They were then cancelled and not produced for general release

Very rare piece, less than 15 in existence

Size 42, fits a US 9.5-10 best as they fit nearly a full size big like most Balenciaga footwear

Brand new in box

I will accept reasonable offers if payment ready'})

      
    file8 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/8.jpg")

    demo_listing8.photo.attach(io: file8, filename: 'balenciaga_rodeo.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 8})
# -----------------------------------------------------------------------------------------------------------------------------
    demo_listing9 = Listing.create!({
      title: 'Balenciaga Rhino Derby', 
      user_id: 8, 
      price: 1035, 
      shipping_price: 70, 
      designer_brand: 'Balenciaga', 
      size: '10', 
      category: 'Formal Shoes', 
      condition: 'Gently Used', 
      sub_category: 'Leather', 
      color: 'Black',
      country: 'Europe',
      description: 'Selling these incredible rhino derbys in the rare, quickly sold out size 43.

Used once for a photoshoot, like new condition however. judge from the pictures.

Comes with original box and all tags etc.

Product details:

• Smooth calfskin
• Lace-up derby
• Chunky design
• Pyramidal toe shape
• Tone-on-tone laces
• 4 eyelets lace-up vamp
• Thick toothed rubber outsole
• 30mm arch
• Made in Italy
-Material: 100% calfskin

Shipping tracked from Sweden. DHL Express shipping avaliable for a extra fee as well.

Serious offers welcome but im not accepting lowballs.
Message me on lG for a faster response @olofhohner

All sales final. No returns/refunds. No exchanges. Under any circumstance.
Please message me if you have any questions, thanks.'})

      
    file9 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/9.jpg")

    demo_listing9.photo.attach(io: file9, filename: 'Balenciagaderby.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 9})
# -----------------------------------------------------------------------------------------------------------------------------
    demo_listing10 = Listing.create!({
      title: 'SS10 Dior Homme laced hi tops', 
      user_id: 8, 
      price: 473, 
      shipping_price: 0, 
      designer_brand: 'Dior', 
      size: '8.5', 
      category: 'Sneakers', 
      condition: 'Gently Used', 
      sub_category: 'Hi Top sneakers', 
      color: 'Black',
      country: 'United States',
      description: '1 pair of Dior Homme sneakers
From Spring-Summer 2010
Size 41, fits 41-42'})

      
    file10 = URI.open("https://derailed-seed.s3.us-west-1.amazonaws.com/10.jpg")

    demo_listing10.photo.attach(io: file10, filename: 'Diorsneaker.jpg')
    Comment.create({body: 'you would have gucci loafers', author_id:'2', listing_id: 10})

# --------------------------------------------------------------------------------------------------------------------------------


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