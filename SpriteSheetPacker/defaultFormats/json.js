

function exportSpriteSheet(dataFilePath, imageFilePath, spriteFrames) {
    var jsonFrames = {};
    for (var key in spriteFrames) {
        var spriteFrame = spriteFrames[key];

        var cocosFrame = {};
        cocosFrame["frame"] = spriteFrame.frame;
        cocosFrame["sourceSize"] = spriteFrame.sourceSize;
        cocosFrame["rotated"] = spriteFrame.rotated;
        if(spriteFrame.triangles)
	    {
			cocosFrame["triangles"] = spriteFrame.triangles; 
        }

        jsonFrames[key] = cocosFrame;
    }

    return {
        data: JSON.stringify(jsonFrames, null, "\t"),
        format: "json"
    };
}
