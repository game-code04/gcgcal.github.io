function Calc() {
	ssr0_num = document.lbcalc.ssr0_num.value;
	ssr1_num = document.lbcalc.ssr1_num.value;
	ssr2_num = document.lbcalc.ssr2_num.value;
	sr0_num = document.lbcalc.sr0_num.value;
	sr1_num = document.lbcalc.sr1_num.value;
	sr2_num = document.lbcalc.sr2_num.value;
	w = document.lbcalc.w.value;
	b = document.lbcalc.b.value;
	p = document.lbcalc.p.value;
	g = document.lbcalc.g.value;
	
	//必要個数
	req_w = 420*parseInt(ssr0_num);
	req_w += 370*parseInt(ssr1_num);
	req_w += 270*parseInt(ssr2_num);
	req_w += 230*parseInt(sr0_num);
	req_w += 200*parseInt(sr1_num);
	req_w += 120*parseInt(sr2_num);

	req_b = 160*parseInt(ssr0_num);
	req_b += 140*parseInt(ssr1_num);
	req_b += 100*parseInt(ssr2_num);
	req_b += 95*parseInt(sr0_num);
	req_b += 80*parseInt(sr1_num);
	req_b += 50*parseInt(sr2_num);

	req_p = 85*parseInt(ssr0_num);
	req_p += 85*parseInt(ssr1_num);
	req_p += 50*parseInt(ssr2_num);
	req_p += 50*parseInt(sr0_num);
	req_p += 50*parseInt(sr1_num);
	req_p += 30*parseInt(sr2_num);

	req_g = 10*parseInt(ssr0_num);
	req_g += 10*parseInt(ssr1_num);
	req_g += 6*parseInt(ssr2_num);
	req_g += 5*parseInt(sr0_num);
	req_g += 5*parseInt(sr1_num);
	req_g += 3*parseInt(sr2_num);

	document.lbcalc.req_w.value = req_w;
	document.lbcalc.req_b.value = req_b;
	document.lbcalc.req_p.value = req_p;
	document.lbcalc.req_g.value = req_g;
	
	//不足数
	beh_w = req_w - w;
	beh_b = req_b - b;
	beh_p = req_p - p;
	beh_g = req_g - g;
	document.lbcalc.beh_w.value = beh_w;
	document.lbcalc.beh_b.value = beh_b;
	document.lbcalc.beh_p.value = beh_p;
	document.lbcalc.beh_g.value = beh_g;
	
	//周回数
	inf = [18,6,3]
	nig = [14,5,2]
	hard = [10,3,1]
	dub = document.lbcalc.dub.checked;
	if (dub == true){
		for(i=0;i<3;i++){
			inf[i] *= 2;
			nig[i] *= 2;
			hard[i] *= 2;
		}
	}
	round_iw = (beh_w)/inf[0];
	round_ib = (beh_b)/inf[1];
	round_ip = (beh_p)/inf[2];
	round_nw = (beh_w)/nig[0];
	round_nb = (beh_b)/nig[1];
	round_np = (beh_p)/nig[2];
	round_hw = (beh_w)/hard[0];
	round_hb = (beh_b)/hard[1];
	round_hp = (beh_p)/hard[2];
	document.lbcalc.round_iw.value = Math.ceil(round_iw);
	document.lbcalc.round_ib.value = Math.ceil(round_ib);
	document.lbcalc.round_ip.value = Math.ceil(round_ip);
	document.lbcalc.round_nw.value = Math.ceil(round_nw);
	document.lbcalc.round_nb.value = Math.ceil(round_nb);
	document.lbcalc.round_np.value = Math.ceil(round_np);
	document.lbcalc.round_hw.value = Math.ceil(round_hw);
	document.lbcalc.round_hb.value = Math.ceil(round_hb);
	document.lbcalc.round_hp.value = Math.ceil(round_hp);
}
