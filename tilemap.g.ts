// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "spikesUp":
            case "tile1":return tile1;
            case "spikesDown":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
