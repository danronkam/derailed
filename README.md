# derailed [![My Skills](https://skillicons.dev/icons?i=js,html,css,react,redux,ruby,rails,postgres,aws,heroku,figma)](https://skillicons.dev)

Derailed is a footwear focused clone of [Grailed](https://www.grailed.com/). On the site, users can search through listings to find their grail shoe, hopefully for a price that hasn't gone too off the rails. Once logged in users can create listings of their own, and leave offers on others items for sale. 

	
[Check it Out!](https://dk-derailed.herokuapp.com/)


![image](https://user-images.githubusercontent.com/101153713/200691008-92dff210-ba5b-4100-88e0-c2935b5d0a88.png)
# Planning

![image](https://user-images.githubusercontent.com/101153713/212943326-bfaed453-ec5a-48a7-95ea-d2979ccafc6c.png)
Derailed was designed, created, and deployed during a two week sprint during App Academy's Bootcamp. To stay on task with such tight deadlines, I used Figma to create wireframe guides to follow MVP features, and Scrum methodologies manage time. 


# Features
## Search & Categories
![image](https://user-images.githubusercontent.com/101153713/200686761-46664168-693b-4fd2-b607-e3309f2dc04b.png)

Through the search bar or filter bar, users can find and filter cards to find what they're looking for.

```
    const {searchTerm} = useParams()
    const listings = useSelector(getListings)
    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    const filterListings = listings.filter(listing => {
        let brand = listing.designerBrand.toLowerCase()
        let title = listing.title.toLowerCase()
        let description = listing.description.toLowerCase()
        let tag = listing.subCategory.toLowerCase()
        if(searchTerm.includes(' ')) {
            let terms = searchTerm.split(' ')
            for(let i = 0; i < terms.length; i++) {
                let term = terms[i]
                if(brand === term || title.includes(term) || description.includes(term) || tag === term) {
                    filtered.push(listing)
                }
            }

        } else if(brand === searchTerm || title.includes(searchTerm) || description.includes(searchTerm) || tag === searchTerm) {
            filtered.push(listing)
        }
    })
```

## Listing CRUD With Photo Upload
![image](https://user-images.githubusercontent.com/101153713/200688840-fb6b0cab-7c1c-43c8-9f97-8da0934e054e.png)
![image](https://user-images.githubusercontent.com/101153713/200689038-09c8f7af-c61d-4a0d-b304-9d4f2fa1374b.png)
Logged in users can browser listings and create their own to sell. 

```
    const handleImage = e => {
        const file = e.currentTarget.files[0]

        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              setPhotoFile(file);
              setPhotoUrl(fileReader.result);
            };
        }
    }
```
## User Editing and Display
![image](https://user-images.githubusercontent.com/101153713/200687541-65feac83-343b-4a6b-a329-91b10cc17803.png)
Users can view all of their listings and edit their account settings through their profile tab.
```
```
## Comments
![image](https://user-images.githubusercontent.com/101153713/200687612-69770134-4721-479d-b48f-13aec5ba3e09.png)
Users can view all comments on a post and add their owm to send offers, or lowballs. 


	
