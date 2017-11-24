var recipes = {}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value
  return object

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object

}

function updateObjectWithKeyAndValue(object, key, value){

  object = new Object({ key: value })
  return object
}
