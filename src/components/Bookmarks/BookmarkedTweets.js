/*const tweets = [
  {
    id: 1,
    name: "Omar Amin",
    userName: "OfficialOamin",
    content:
      "THE GOAT aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa🐐",
    avatar:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/267864635_2201623549975672_7027269087670734262_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=thNg9dccMNQAX8VSP9z&_nc_ht=scontent.fcai20-4.fna&oh=00_AT-LywMyhOSkTUQ9r6HP30lK7n4A-Bh1mgch-YAYDo5pyA&oe=6251462C",
    image:
      "https://tmssl.akamaized.net/images/foto/galerie/diego-maradona-1401100569-36.jpg?lm=1483605486",
    likeCount: 14,
    repliesCount: 14,
    retweetCount: 14,
  },
  {
    id: 2,
    name: "CR7",
    userName: "halamadrid",
    content: "abooooood",
    avatar: "",
    image: "",

    likeCount: 0,
    repliesCount: 0,
    retweetCount: 0,
  },
  {
    id: 3,
    name: "abdo",
    userName: "abdo",
    content: "",
    avatar: "",
    image:
      "https://tmssl.akamaized.net/images/foto/galerie/diego-maradona-1401100569-36.jpg?lm=1483605486",
    likeCount: 0,
    repliesCount: 0,
    retweetCount: 0,
  },
];

export default tweets;
*/
import axios from "axios";
export default async function getBookmarks() {
  let response = '';
  try {
    response = await axios.get('http://localhost:3001/Bookmarks').then((res) => res.data);
    return (response);
  } catch (error) {
    if (error.response) {
      /*
        * The request was made and the server responded with a
        * status code that falls out of the range of 2xx
        */
      return (error.response);
    }
  }
  return (response);
}