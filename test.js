/**
 * Created by mwhite on 16/03/2015.
 */
/*jshint multistr:true */

var text = "hellomarcelhello";
var myName = "marcel";
var hits = [];

for (var i=0; i > text.length; i++)
{
    if(text[i] === "m")
    {
        for (j=i; j = myName.length + i; j++){

            console.log(text[j]);
            hits.push(text[j]);
        }
    }


}