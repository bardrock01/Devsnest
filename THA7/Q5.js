const volume = {
    pi: Math.PI,
    radi: 2,
    h: 10,


    volumeisequalto: function() {
        return (volume.pi * Math.pow(volume.radi, 2) * volume.h);
    }
};
console.log(volume.volumeisequalto())