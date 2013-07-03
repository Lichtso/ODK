var red = 0xff0000;
var green = 0x00ff00;
var blue = 0x0000ff;

var redLineMaterial = new THREE.LineBasicMaterial({color: red, linewidth: 2, opacity: 0.5});
var greenLineMaterial = new THREE.LineBasicMaterial({color: green, linewidth: 2, opacity: 0.5});
var blueLineMaterial = new THREE.LineBasicMaterial({color: blue, linewidth: 2, opacity: 0.5});

var redTranslucentLineMaterial = new THREE.LineBasicMaterial({color: red, linewidth: 1.5, opacity: 0.2});
var greenTranslucentLineMaterial = new THREE.LineBasicMaterial({color: green, linewidth: 1.5, opacity: 0.2});
var blueTranslucentLineMaterial = new THREE.LineBasicMaterial({color: blue, linewidth: 1.5, opacity: 0.2});

var redTranslucentMaterial = new THREE.MeshBasicMaterial({ color: red, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false, depthTest: false});
var blueTranslucentMaterial = new THREE.MeshBasicMaterial({ color: blue, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false, depthTest: false});
var greenTranslucentMaterial = new THREE.MeshBasicMaterial({ color: green, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false, depthTest: false});

var redSolidMaterial = new THREE.MeshBasicMaterial({ color: red, linewidth: 2});
var greenSolidMaterial = new THREE.MeshBasicMaterial({ color: green, linewidth: 2});
var blueSolidMaterial = new THREE.MeshBasicMaterial({ color: blue, linewidth: 2});

var redSolidLineMaterial = new THREE.LineBasicMaterial({color: red, linewidth: 2, opacity: 1});
var greenSolidLineMaterial = new THREE.LineBasicMaterial({color: green, linewidth: 2, opacity: 1});
var blueSolidLineMaterial = new THREE.LineBasicMaterial({color: blue, linewidth: 2, opacity: 1});

