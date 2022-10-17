function make_album(artist_name,album_title,track_no=0)
{
    let album
    if(track_no>0)
    {
        album={artistName:artist_name,albumTitle:album_title,NoofTracks:track_no}
    }
    else
    {
        album={artistName:artist_name,albumTitle:album_title}
    }
    return album
}
console.log(make_album('abc','a_records'))
console.log(make_album('bcd','b_records'))
console.log(make_album('efg','c_records'))
console.log(make_album('ijk','d_records',20))
