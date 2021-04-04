function a() {
  console.log('a');
}

a();

function b() {
  console.log('b');

  a();
}

b();

function c() {
  console.log('c');

  b();
}

c();

function hippo() {
  console.log('hippo');

  lion();
}

function lion() {
  console.log('lion');

  giraffe();
}

function giraffe() {
  console.log('giraffe');

  hippo();
}

hippo();
