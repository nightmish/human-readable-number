module.exports = function toReadable (number) {
    const a = 'one';
    const b = 'two';
    const c = 'three';
    const d = 'four';
    const e = 'five';
    const f = 'six';
    const g = 'seven';
    const h = 'eight';
    const i = 'nine';
    const j = 'ten';
    const k = 'eleven';
    const l = 'twelve';
    const m = 'thirteen';
    const n = 'fourteen';
    const o = 'fifteen';
    const p = 'sixteen';
    const q = 'seventeen';
    const r = 'eighteen';
    const s = 'nineteen';
    const xa = 'twenty';
    const xb = 'thirty';
    const xc = 'forty';
    const xd = 'fifty';
    const xe = 'sixty';
    const xf = 'seventy';
    const xg = 'eighty';
    const xh = 'ninety';
    const xi = ' hundred';
    const xii = 'hundred';
    const xj = ' thousand';
    const xk = 'million';
    const xl = 'billion';
    const xm = 'trillion';
    const xn = 'quadrillion';
    const xo = 'so big...much digits';
    const xp = 'zero';
    let result;
    let x = number;
    let y = x.toString();
    let z;
    let u;
    let v;
    let w;
    let t;
  
  // First digit in hundreds and second digit in two-digit number
   
    if ((y.length === 1 && y[0] === '1') || (y.length === 2 && y[1] === '1') || (y.length === 3 && y[0] === '1') || (y.length === 4 && y[1] === '1')) {
    z = a;
    }
    else if ((y.length === 1 && y[0] === '2') || (y.length === 2 && y[1] === '2') || (y.length === 3 && y[0] === '2') || (y.length === 4 && y[1] === '2')) {
    z = b;
    }
    else if ((y.length === 1 && y[0] === '3') || (y.length === 2 && y[1] === '3') || (y.length === 3 && y[0] === '3') || (y.length === 4 && y[1] === '3')) {
    z = c;
    }
    else if ((y.length === 1 && y[0] === '4') || (y.length === 2 && y[1] === '4') || (y.length === 3 && y[0] === '4') || (y.length === 4 && y[1] === '4')) {
    z = d;
    }
    else if ((y.length === 1 && y[0] === '5') || (y.length === 2 && y[1] === '5') || (y.length === 3 && y[0] === '5') || (y.length === 4 && y[1] === '5')) {
    z = e;
    }
    else if( (y.length === 1 && y[0] === '6') || (y.length === 2 && y[1] === '6') || (y.length === 3 && y[0] === '6') || (y.length === 4 && y[1] === '6')) {
    z = f;
    }
    else if ((y.length === 1 && y[0] === '7') || (y.length === 2 && y[1] === '7') || (y.length === 3 && y[0] === '7') || (y.length === 4 && y[1] === '7'))  {
    z = g;
    }
    else if ((y.length === 1 && y[0] === '8') || (y.length === 2 && y[1] === '8') || (y.length === 3 && y[0] === '8') || (y.length === 4 && y[1] === '8')) {
    z = h;
    }
    else if ((y.length === 1 && y[0] === '9') || (y.length === 2 && y[1] === '9') || (y.length === 3 && y[0] === '9') || (y.length === 4 && y[1] === '9')) {
    z = i;
    }
  else if (y.length === 1 && y[0] === '0') {
   z = xp; 
  }   
  else {
   z = xo; 
  };
  // First digit in thousands
  
  if (y.length === 4 && y[0] === '1') {
  t = a;  
  }
  else if (y.length === 4 && y[0] === '2') {
  t = b;  
  }
  else if (y.length === 4 && y[0] === '3') {
  t = c;  
  }
  else if (y.length === 4 && y[0] === '4') {
  t = d;  
  }
  else if (y.length === 4 && y[0] === '5') {
  t = e;  
  }
  else if (y.length === 4 && y[0] === '6') {
  t = f;  
  }
  else if (y.length === 4 && y[0] === '7') {
  t = g;  
  }
  else if (y.length === 4 && y[0] === '8') {
  t = h;  
  }
  else if (y.length === 4 && y[0] === '9') {
  t = i;  
  };    
    
  // 20/30/40/50/60/70/80/90
    
  if ((y.length === 2 && y[0] === '2') || (y.length === 3 && y[1] === '2') || (y.length === 4 && y[2] === '2')) {
   v = xa; 
  }
  else if ((y.length === 2 && y[0] === '3') || (y.length === 3 && y[1] === '3') || (y.length === 4 && y[2] === '3')) {
   v = xb; 
  }  
  else if ((y.length === 2 && y[0] === '4') || (y.length === 3 && y[1] === '4') || (y.length === 4 && y[2] === '4')) {
   v = xc; 
  }
  else if ((y.length === 2 && y[0] === '5') || (y.length === 3 && y[1] === '5') || (y.length === 4 && y[2] === '5')) {
   v = xd; 
  }
  else if ((y.length === 2 && y[0] === '6') || (y.length === 3 && y[1] === '6') || (y.length === 4 && y[2] === '6')) {
   v = xe; 
  } 
  else if ((y.length === 2 && y[0] === '7') || (y.length === 3 && y[1] === '7') || (y.length === 4 && y[2] === '7')) {
   v = xf; 
  }
  else if ((y.length === 2 && y[0] === '8') || (y.length === 3 && y[1] === '8') || (y.length === 4 && y[2] === '8')) {
   v = xg; 
  }
  else if ((y.length === 2 && y[0] === '9') || (y.length === 3 && y[1] === '9') || (y.length === 4 && y[2] === '9'))  {
   v = xh; 
  };   
  
  // 10-19
    
  if ((y.length === 2 && y[0] + y[1] === '11') || (y.length === 3 && y[1] + y[2] === '11') || (y.length === 4 && y[2] + y[3] === '11') || (y.length === 5 && y[0] + y[1] === '11') || (y.length === 5 && y[3] + y[4] === '11') || (y.length === 6 && y[1] + y[2] === '11') || (y.length === 6 && y[4] + y[5] === '11') || (y.length === 7 && y[2] + y[3] === '11') || (y.length === 7 && y[5] + y[6] === '11') || (y.length === 8 && y[0] + y[1] === '11') || (y.length === 8 && y[3] + y[4] === '11') || (y.length === 8 && y[6] + y[7] === '11') || (y.length === 9 && y[1] + y[2] === '11') || (y.length === 9 && y[4] + y[5] === '11') || (y.length === 9 && y[7] + y[8] === '11')) {
  w = k;
  }
  else if ((y.length === 2 && y[0] + y[1] === '12') || (y.length === 3 && y[1] + y[2] === '12') || (y.length === 4 && y[2] + y[3] === '12') || (y.length === 5 && y[0] + y[1] === '12') || (y.length === 5 && y[3] + y[4] === '12') || (y.length === 6 && y[1] + y[2] === '12') || (y.length === 6 && y[4] + y[5] === '12') || (y.length === 7 && y[2] + y[3] === '12') || (y.length === 7 && y[5] + y[6] === '12') || (y.length === 8 && y[0] + y[1] === '12') || (y.length === 8 && y[3] + y[4] === '12') || (y.length === 8 && y[6] + y[7] === '12') || (y.length === 9 && y[1] + y[2] === '12') || (y.length === 9 && y[4] + y[5] === '12') || (y.length === 9 && y[7] + y[8] === '12')) {
  w = l;
  }
  else if ((y.length === 2 && y[0] + y[1] === '13') || (y.length === 3 && y[1] + y[2] === '13') || (y.length === 4 && y[2] + y[3] === '13') || (y.length === 5 && y[0] + y[1] === '13') || (y.length === 5 && y[3] + y[4] === '13') || (y.length === 6 && y[1] + y[2] === '13') || (y.length === 6 && y[4] + y[5] === '13') || (y.length === 7 && y[2] + y[3] === '13') || (y.length === 7 && y[5] + y[6] === '13') || (y.length === 8 && y[0] + y[1] === '13') || (y.length === 8 && y[3] + y[4] === '13') || (y.length === 8 && y[6] + y[7] === '13') || (y.length === 9 && y[1] + y[2] === '13') || (y.length === 9 && y[4] + y[5] === '13') || (y.length === 9 && y[7] + y[8] === '13')) {
  w = m;
  }
  else if ((y.length === 2 && y[0] + y[1] === '14') || (y.length === 3 && y[1] + y[2] === '14') || (y.length === 4 && y[2] + y[3] === '14') || (y.length === 5 && y[0] + y[1] === '14') || (y.length === 5 && y[3] + y[4] === '14') || (y.length === 6 && y[1] + y[2] === '14') || (y.length === 6 && y[4] + y[5] === '14') || (y.length === 7 && y[2] + y[3] === '14') || (y.length === 7 && y[5] + y[6] === '14') || (y.length === 8 && y[0] + y[1] === '14') || (y.length === 8 && y[3] + y[4] === '14') || (y.length === 8 && y[6] + y[7] === '14') || (y.length === 9 && y[1] + y[2] === '14') || (y.length === 9 && y[4] + y[5] === '14') || (y.length === 9 && y[7] + y[8] === '14')) {
  w = n;
  }
  else if ((y.length === 2 && y[0] + y[1] === '15') || (y.length === 3 && y[1] + y[2] === '15') || (y.length === 4 && y[2] + y[3] === '15') || (y.length === 5 && y[0] + y[1] === '15') || (y.length === 5 && y[3] + y[4] === '15') || (y.length === 6 && y[1] + y[2] === '15') || (y.length === 6 && y[4] + y[5] === '15') || (y.length === 7 && y[2] + y[3] === '15') || (y.length === 7 && y[5] + y[6] === '15') || (y.length === 8 && y[0] + y[1] === '15') || (y.length === 8 && y[3] + y[4] === '15') || (y.length === 8 && y[6] + y[7] === '15') || (y.length === 9 && y[1] + y[2] === '15') || (y.length === 9 && y[4] + y[5] === '15') || (y.length === 9 && y[7] + y[8] === '15')) {
  w = o;
  }
  else if ((y.length === 2 && y[0] + y[1] === '16') || (y.length === 3 && y[1] + y[2] === '16') || (y.length === 4 && y[2] + y[3] === '16') || (y.length === 5 && y[0] + y[1] === '16') || (y.length === 5 && y[3] + y[4] === '16') || (y.length === 6 && y[1] + [2] === '16') || (y.length === 6 && y[4] + [5] === '16') || (y.length === 7 && y[2] + y[3] === '16') || (y.length === 7 && y[5] + y[6] === '16') || (y.length === 8 && y[0] + y[1] === '16') || (y.length === 8 && y[3] + y[4] === '16') || (y.length === 8 && y[6] + y[7] === '16') || (y.length === 9 && y[1] + y[2] === '16') || (y.length === 9 && y[4] + y[5] === '16') || (y.length === 9 && y[7] + y[8] === '16')) {
  w = p;
  }
  else if ((y.length === 2 && y[0] + y[1] === '17') || (y.length === 3 && y[1] + y[2] === '17') || (y.length === 4 && y[2] + y[3] === '17') || (y.length === 5 && y[0] + y[1] === '17') || (y.length === 5 && y[3] + y[4] === '17') || (y.length === 6 && y[1] + y[2] === '17') || (y.length === 6 && y[4] + y[5] === '17') || (y.length === 7 && y[2] + y[3] === '17') || (y.length === 7 && y[5] + y[6] === '17') || (y.length === 8 && y[0] + y[1] === '17') || (y.length === 8 && y[3] + y[4] === '17') || (y.length === 8 && y[6] + y[7] === '17') || (y.length === 9 && y[1] + y[2] === '17') || (y.length === 9 && y[4] + y[5] === '17') || (y.length === 9 && y[7] + y[8] === '17')) {
  w = q;
  }
  else if ((y.length === 2 && y[0] + y[1] === '18') || (y.length === 3 && y[1] + y[2] === '18') || (y.length === 4 && y[2] + y[3] === '18') || (y.length === 5 && y[0] + y[1] === '18') || (y.length === 5 && y[3] + y[4] === '18') || (y.length === 6 && y[1] + y[2] === '18') || (y.length === 6 && y[4] + y[5] === '18') || (y.length === 7 && y[2] + y[3] === '18') || (y.length === 7 && y[5] + y[6] === '18') || (y.length === 8 && y[0] + y[1] === '18') || (y.length === 8 && y[3] + y[4] === '18') || (y.length === 8 && y[6] + y[7] === '18') || (y.length === 9 && y[1] + y[2] === '18') || (y.length === 9 && y[4] + y[5] === '18') || (y.length === 9 && y[7] + y[8] === '18')) {
  w = r;
  }
  else if ((y.length === 2 && y[0] + y[1] === '19') || (y.length === 3 && y[1] + y[2] === '19') || (y.length === 4 && y[2] + y[3] === '19') || (y.length === 5 && y[0] + y[1] === '19') || (y.length === 5 && y[3] + y[4] === '19') || (y.length === 6 && y[1] + y[2] === '19') || (y.length === 6 && y[4] + y[5] === '19') || (y.length === 7 && y[2] + y[3] === '19') || (y.length === 7 && y[5] + y[6] === '19') || (y.length === 8 && y[0] + y[1] === '19') || (y.length === 8 && y[3] + y[4] === '19') || (y.length === 8 && y[6] + y[7] === '19') || (y.length === 9 && y[1] + y[2] === '19') || (y.length === 9 && y[4] + y[5] === '19') || (y.length === 9 && y[7] + y[8] === '19')) {
  w = s;
  }
  else if ((y.length === 2 && y[0] + y[1] === '10') || (y.length === 3 && y[1] + y[2] === '10') || (y.length === 4 && y[2] + y[3] === '10') || (y.length === 5 && y[0] + y[1] === '10') || (y.length === 5 && y[3] + y[4] === '10') || (y.length === 6 && y[1] + y[2] === '10') || (y.length === 6 && y[4] + y[5] === '10') || (y.length === 7 && y[2] + y[3] === '10') || (y.length === 7 && y[5] + y[6] === '10') || (y.length === 8 && y[0] + y[1] === '10') || (y.length === 8 && y[3] + y[4] === '10') || (y.length === 8 && y[6] + y[7] === '10') || (y.length === 9 && y[1] + y[2] === '10') || (y.length === 9 && y[4] + y[5] === '10') || (y.length === 9 && y[7] + y[8] === '10')) {
  w = j;
  };
    
  // Last number
    
  if ((y.length === 3 && y[2] === '1') || (y.length === 4 && y[3] === '1') || (y.length === 5 && y[4] === '1') || (y.length === 6 && y[5] === '1') || (y.length === 7 && y[6] === '1') || (y.length === 8 && y[7] === '1') || (y.length === 9 && y[8] === '1')) {
  u = a;
  }
  else if ((y.length === 3 && y[2] === '2') || (y.length === 4 && y[3] === '2') || (y.length === 5 && y[4] === '2') || (y.length === 6 && y[5] === '2') || (y.length === 7 && y[6] === '2') || (y.length === 8 && y[7] === '2') || (y.length === 9 && y[8] === '2')) {
  u = b;
  } 
  else if ((y.length === 3 && y[2] === '3') || (y.length === 4 && y[3] === '3') || (y.length === 5 && y[4] === '3') || (y.length === 6 && y[5] === '3') || (y.length === 7 && y[6] === '3') || (y.length === 8 && y[7] === '3') || (y.length === 9 && y[8] === '3')) {
  u = c;
  }
  else if ((y.length === 3 && y[2] === '4') || (y.length === 4 && y[3] === '4') || (y.length === 5 && y[4] === '4') || (y.length === 6 && y[5] === '4') || (y.length === 7 && y[6] === '4') || (y.length === 8 && y[7] === '4') || (y.length === 9 && y[8] === '4')) {
  u = d;
  }
  else if ((y.length === 3 && y[2] === '5') || (y.length === 4 && y[3] === '5') || (y.length === 5 && y[4] === '5') || (y.length === 6 && y[5] === '5') || (y.length === 7 && y[6] === '5') || (y.length === 8 && y[7] === '5') || (y.length === 9 && y[8] === '5')) {
  u = e;
  }
  else if ((y.length === 3 && y[2] === '6') || (y.length === 4 && y[3] === '6') || (y.length === 5 && y[4] === '6') || (y.length === 6 && y[5] === '6') || (y.length === 7 && y[6] === '6') || (y.length === 8 && y[7] === '6') || (y.length === 9 && y[8] === '6')) {
  u = f;
  }
  else if ((y.length === 3 && y[2] === '7') || (y.length === 4 && y[3] === '7') || (y.length === 5 && y[4] === '7') || (y.length === 6 && y[5] === '7') || (y.length === 7 && y[6] === '7') || (y.length === 8 && y[7] === '7') || (y.length === 9 && y[8] === '7')) {
  u = g;
  }
  else if ((y.length === 3 && y[2] === '8') || (y.length === 4 && y[3] === '8') || (y.length === 5 && y[4] === '8') || (y.length === 6 && y[5] === '8') || (y.length === 7 && y[6] === '8') || (y.length === 8 && y[7] === '8') || (y.length === 9 && y[8] === '8')) {
  u = h;
  }
  else if ((y.length === 3 && y[2] === '9') || (y.length === 4 && y[3] === '9') || (y.length === 5 && y[4] === '9') || (y.length === 6 && y[5] === '9') || (y.length === 7 && y[6] === '9') || (y.length === 8 && y[7] === '9') || (y.length === 9 && y[8] === '9')) {
  u = i;
  };
  
    
  //Result 
    
  if (y.length === 1) {
   result = z;  
   }
  else if (y.length === 2 && y[0] === '0') {
  result = 'Are you a football player?';  
  }   
  else if (y.length === 2 && y[0] !== '1' && y[0] !== '0' && y[1] !== '0') {
  result = v + ' ' + z;  
  }
  else if (y.length === 2 && y[0] === '1') {
  result = w;  
  }
  else if (y.length === 2 && y[0] !== '1' && y[0] !== '0' && y[1] !== '0' ) {
  result = w;  
  }
  else if (y.length === 2 && y[0] !== '1' && y[0] !== '0' && y[1] === '0') {
  result = v;  
  } 
  else if (y.length === 3 && (y[1] !== '1') && (y[1] !== '0') && (y[2] !== '0')) {
  result = z + ' ' + xii + ' ' + v + ' ' + u;  
  }
  else if (y.length === 3 && y[1] === '1') {
  result = z + ' ' + xii + ' ' + w;  
  }
  else if (y.length === 3 && y[2] === '0' && (y[1] + y[2] !== '00')) {
  result = z + ' ' + xii + ' ' + v;  
  } 
  else if (y.length === 3 && y[1] === '0' && (y[1] + y[2] !== '00')) {
  result = z + ' ' + xii + ' ' + u;  
  }
  else if (y.length === 3 && y[1] + y[2] === '00') {
  result = z + xi;  
  } 
  else if (y.length === 4 && y[1] + y[2] + y[3] === '000') {
  result = t + xj;  
  } 
  else if (y.length === 4 && y[2] + y[3] === '00') {
  result = t + xj + ' ' + z + xi;  
  }
  else if (y.length === 4 && y[3] === '0' && y[2] !== '1') {
  result = t + xj + ' ' + z + ' ' + xii + ' ' + v;  
  }
  else if (y.length === 4 && y[2] === '1' && y[1] !== '0') {
  result = t + xj + ' ' + z + ' ' + xii + ' ' + w;  
  }
  else if (y.length === 4 && y[1] === '0' && y[2] === '0' && y[3] !== '0') {
  result = t + xj + ' ' + u;  
  }
  else if (y.length === 4 && y[1] === '0' && y[2] === '1') {
  result = t + xj + ' ' + w;  
  }
  else if (y.length === 4 && y[1] !== '0' && y[2] !== '0' && y[2] !== '1' && y[3] !== '0') {
  result = t + xj + ' ' + z + ' ' + xii + ' ' + v + ' ' + u;  
  }
  else if (y.length === 4 && y[1] === '0' && y[2] !== '0' && y[2] !== '1' && y[3] !== '0') {
  result = t + xj + ' ' + v + ' ' + u;  
  }   
  else {
  result = 'I dont know'; 
  }
  return result;
  } 
