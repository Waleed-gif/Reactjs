const Task = () => {
    const Arr = [
            {key:1, value:10}, 
            {key:2, value:20}, 
            {key:3, value: 30},
            {key:4, value: 30}
    ];
    var reArr = Arr.map((obj) => {
        var rObj = {};
        rObj[obj.key] = obj.value;
        return rObj;
    });
    console.log("Array after Map Function: ");
    console.log(reArr);
    console.log("Orignial Array");
    console.log(Arr);
    // reArr is now [{1:10}, {2:20}, {3:30}], 
    // Arr is still [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]
    
    var Arr2 = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
    var reArr2 = Arr2.forEach(function(obj){ 
        var rObj = {};
        rObj[obj.key] = obj.value;
        return rObj;
    });
    console.log("Array after forEach loop");
    console.log(reArr2);
    return ( 
             <> 
                <h1>Map VS ForEach</h1>
             </>
     );
}
 
export default Task;