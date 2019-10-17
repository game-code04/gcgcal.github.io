function Calc() {
	ssr0_num = document.form1.ssr0_num.value;
	ssr1_num = document.form1.ssr1_num.value;
	ssr2_num = document.form1.ssr2_num.value;
	sr0_num = document.form1.sr0_num.value;
	sr1_num = document.form1.sr1_num.value;
	sr2_num = document.form1.sr2_num.value;
	w = document.form1.w.value;
	b = document.form1.b.value;
	p = document.form1.p.value;
	g = document.form1.g.value;
	
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

	document.form1.req_w.value = req_w;
	document.form1.req_b.value = req_b;
	document.form1.req_p.value = req_p;
	document.form1.req_g.value = req_g;
	
	//不足数
	beh_w = req_w - w;
	beh_b = req_b - b;
	beh_p = req_p - p;
	beh_g = req_g - g;
	document.form1.beh_w.value = beh_w;
	document.form1.beh_b.value = beh_b;
	document.form1.beh_p.value = beh_p;
	document.form1.beh_g.value = beh_g;
	
	//周回数
	inf = [18,6,3]
	nig = [14,5,2]
	hard = [10,3,1]
	dub = document.form1.dub.checked;
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
	document.form1.round_iw.value = Math.ceil(round_iw);
	document.form1.round_ib.value = Math.ceil(round_ib);
	document.form1.round_ip.value = Math.ceil(round_ip);
	document.form1.round_nw.value = Math.ceil(round_nw);
	document.form1.round_nb.value = Math.ceil(round_nb);
	document.form1.round_np.value = Math.ceil(round_np);
	document.form1.round_hw.value = Math.ceil(round_hw);
	document.form1.round_hb.value = Math.ceil(round_hb);
	document.form1.round_hp.value = Math.ceil(round_hp);
}
