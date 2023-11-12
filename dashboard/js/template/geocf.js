import {getCookie} from "https://jscroot.github.io/cookie/croot.js";

export let URLGeoJson = "https://asia-southeast2-argon-fire-401902.cloudfunctions.net/fetchGeoJson";
export let urlPostGCF = "https://asia-southeast2-argon-fire-401902.cloudfunctions.net/postGIS4";
export let UrlLogin = "https://asia-southeast2-argon-fire-401902.cloudfunctions.net/loginGISChapter5"
export let UrlRegister = "https://asia-southeast2-gis-project-401902.cloudfunctions.net/RegisterGeo"
export let tableTag="tr";
export let tableRowClass="content is-small";
export let token = "tokennya"
export let cookie = getCookie("Login")
export let tableTemplate=`


<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`