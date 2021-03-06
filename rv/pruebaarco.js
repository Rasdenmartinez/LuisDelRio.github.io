var figura = new THREE.Shape();

figura.moveTo(0, 0);
figura.arc(0, 0, 4, .52, -.52, true);
figura.lineTo(3.46, -2);

var forma = new THREE.ExtrudeGeometry( figura, {amount: 1, bevelEnabled: false});

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(malla);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
