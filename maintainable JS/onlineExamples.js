// Don't do this
function(items){
    if(items != null){
        items.sort();
    }

// do this
function(items){
  if(items instanceof Array){
    items.sort();
  }
}
