function DbCalc() {
	w = document.dbcalc.w.value;
        b = document.dbcalc.b.value;
        p = document.dbcalc.p.value;
        g = document.dbcalc.g.value;
	wb = document.dbcalc.wb.value;
        bb = document.dbcalc.bb.value;
        pb = document.dbcalc.pb.value;
        gb = document.dbcalc.gb.value;
	exptable=[0,133,320,583,989,1551,2281,3188,4280,5566,7051,8742,12767,10863,15112,17685,20491,23534,26819,30351,34133,38168,42462,47016,51836,56924,62283,67918,73830,80023,86501,93265,100319,107665,115306,123246,131486,140028,148877,158033,171427,185592,200555,216339,232969,250472,268871,288192,308461,329704,351946,375213,399533,424931,451433,479067,507859,537836,569025,601454,635149,670139,706451,744112,783152,823597,865476,908817,953649,1000000]

	getexp = 750*wb+3750*bb+15000*pb+75000*gb+500*w+2500*b+10000*p+50000*g;
	document.dbcalc.exp.value = Math.ceil(getexp);
	document.dbcalc.cry.value = Math.ceil((750*wb+3750*bb+15000*pb+75000*gb)*2/3+500*w+2500*b+10000*p+50000*g);

	lv70 = Math.floor(getexp/1000000);
	document.dbcalc.lv70.value = Math.ceil(lv70);

	getexp -= 1000000*lv70;
	for(i=1;getexp>=0;i++){
		getexp -= exptable[i]-exptable[i-1];
	}
	document.dbcalc.rem.value = Math.ceil(i-1);
	document.expcalc.level.value = Math.ceil(i-1);
}
