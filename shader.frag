varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uImageAspect;
uniform float uPlaneAspect;
uniform float uTime;

void main() {
// オフスクリーンレンダリングの結果をまず取り出す
  vec3 color = texture2D( uTexture, vUv ).rgb;
  gl_FragColor = vec4( color, 1.0 ); // gl_FragColor に vec4 型（rgba）の色を入れることでピクセル色を決定する。
}