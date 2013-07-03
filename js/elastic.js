///elastic-experiment
function getElasticJSON(urlTemp)
{
    $.ajax({
           url: urlTemp,
           dataType: "json",
           success: function(data)
           {
           var item = JSON.stringify(data);
           var thisItem = JSON.parse(item);
           var item = thisItem._source;
           
          // alert(item.expression[0].language);
           
          //document.getElementById('elastic_response').innerHTML = thisItem._source.set;
           
           var language = Object.keys(item.languageBlocks); //keys for different language versions of this item. (i.e en, gr, no,)

           var thisLanguage = "en";
           
           if(language.indexOf('en')==-1)
           {thisLanguage = language[0];}
           
           //alert(thisLanguage);
           
           //jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
           //document.getElementById('itemTitle').innerHTML = languageBlock.title ;
           //document.getElementById('itemDescription').innerHTML = languageBlock.description;
           
           ///-------------------------------------------Main Item Content--------------------------------------------------------//
           //TITLE
           if(item.languageBlocks[thisLanguage].title!==undefined)
           {
           document.getElementById('itemTitle').innerHTML = item.languageBlocks[thisLanguage].title ;
           }
           
           //DESCRIPTION
           if(item.languageBlocks[thisLanguage].abstract!==undefined)
           {
           document.getElementById('itemDescription').innerHTML = item.languageBlocks[thisLanguage].abstract;
           }
           
           //KEYWORDS
           if(item.languageBlocks[thisLanguage].keyword!==undefined)
           {
           for(var j=0; j<item.languageBlocks[thisLanguage].keyword.length;j++)//*ARRAY of keywords in current version
           {
           if(j==item.languageBlocks[thisLanguage].keyword.length-1)
           {
           jQuery('#itemKeywords').append('<a  href="listing.html?query='+item.languageBlocks[thisLanguage].keyword[j]+'" class="forKomma link last">'+item.languageBlocks[thisLanguage].keyword[j]+'</a>');
           
           }else{
           jQuery('#itemKeywords').append('<a  href="listing.html?query='+item.languageBlocks[thisLanguage].keyword[j]+'" class="forKomma link">'+item.languageBlocks[thisLanguage].keyword[j]+'</a>');
           
           }
           
           }
           
           }
           
           
           
           ///-------------------------------------------Information on the right--------------------------------------------------------//
           
           //AUTHORS
           if(item.creator[0]!==undefined)
           {
           jQuery('#authors').append('<span>Authors:</span>');
           for(var j=0; j<item.creator.length;j++)
           {
           if(j==item.creator.length-1){
           jQuery('#authors').append('<span class="forKomma last">'+item.creator[j].name.split(",")[0]+'<span>');
           }else{
           jQuery('#authors').append('<span class="forKomma">'+item.creator[j].name.split(",")[0]+'<span>');
           }//end else
           }//end for
           }
           
           
           //RESOURCE TYPE
           if(item.controlled.type[0].value!==undefined)
           {
           jQuery('#resource_type').append('<span>Resource Type:</span>');
           for(var j=0; j<item.controlled.type.length;j++)
           {
           if(j==item.controlled.type.length-1){
           jQuery('#resource_type').append('<span class="forKomma last">'+item.controlled.type[j].value+'<span>');
           }else{
           jQuery('#resource_type').append('<span class="forKomma">'+item.controlled.type[j].value+'<span>');
           }//end else
           }//end for
           }

           //PUBLISHER
           if(item.expressions[0].publisher[0]!==undefined)
           {
           jQuery('#publisher').append('<span>Publisher:</span>');
           for(var j=0; j<item.expressions[0].publisher.length;j++)
           {
           if(j==item.expressions[0].publisher.length-1){
           jQuery('#publisher').append('<span class="forKomma last">'+item.expressions[0].publisher[j].name.split(",")[0]+'<span>');
           }else{
           jQuery('#publisher').append('<span class="forKomma">'+item.expressions[0].publisher[j].name.split(",")[0]+'<span>');
           }//end else
           }//end for
           }
           
           //FULL CITATION
           if(item.expressions[0].citation[0]!==undefined)
           {
           jQuery('#citation_title').append('<span>Full Citation:</span>');
           for(var j=0; j<item.expressions[0].citation.length;j++)
           {
           jQuery('#citation_title').append('<span class="forKomma ">'+item.expressions[0].citation[j].title+'<span>');
           jQuery('#citation_issn').append('<span class="forKomma ">'+item.expressions[0].citation[j].ISSN+'<span>');
           jQuery('#citation_number').append('<span class="forKomma last">'+item.expressions[0].citation[j].citationNumber+'<span>');
           }//end for
           }

           //PUBLICATION YEAR
           if(item.expressions[0].publisher[0]!==undefined)
           {
           jQuery('#publication_year').append('<span>Publication Year:</span>');
           for(var j=0; j<item.expressions[0].publisher.length;j++)
           {
           if(j==item.expressions[0].publisher.length-1){
           jQuery('#publication_year').append('<span class="forKomma last">'+item.expressions[0].publisher[j].date.split(",")[0]+'<span>');
           }else{
           jQuery('#publication_year').append('<span class="forKomma">'+item.expressions[0].publisher[j].date.split(",")[0]+'<span>');
           }//end else
           }//end for
           }
           
           //LANGUAGE
           if(item.expressions[0].language!==undefined)
           {
           jQuery('#language').append('<span>Language:</span>');
           
           for(var j=0; j<item.expressions[0].language.length;j++)
           {
           if(j==item.expressions[0].language.length-1){
           jQuery('#language').append('<span class="forKomma last">'+item.expressions[0].language[j]+'<span>');
           }else{
           jQuery('#language').append('<span class="forKomma">'+item.expressions[0].language[j]+'<span>');
           }//end else
           }//end for
           }
           
           //REVIEW STATUS
           if(item.reviewStatus!==undefined)
           {
           jQuery('#review_status').append('<span>Review Status:</span><span>Collection:</span><span class="forKomma last">'+item.reviewStatus+'<span>');
           }
           
           //PUBLICATION STATUS
           if(item.publicationStatus!==undefined)
           {
           jQuery('#publication_status').append('<span>Publication Status:</span><span>Collection:</span><span class="forKomma last">'+item.publicationStatus+'<span>');
           }
           
           //SET
           if(item.set!==undefined)
           {
           jQuery('#collection').append('<span>Collection:</span><span class="forKomma last">'+item.set+'<span>');
           }
           
    
           
           }
           

           
           
           //end of -success- of getElasticJSON
           })};

