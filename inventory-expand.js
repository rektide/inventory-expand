#!/usr/bin/env node
"use strict"
var
  byline= require("byline"),
  pad= require("left-pad")

var
  suffix= process.argv[2]|| "",
  match= /^(\w*)\[(\d+):(\d+)\]([\w_\.]*)$/

byline(process.stdin, {encoding: "utf8"}).on("data", function(line){
	var range= match.exec(line)
	if(!range){
		console.log(line+ suffix)
		return
	}

	var
	  lead= range[1],
	  start= parseInt(range[2]),
	  end= parseInt(range[3]),
	  tail= range[4],
	  len= range[2].length
	for(var i= start; i<= end; ++i){
		console.log(lead+ pad(i, len, 0)+ tail+ suffix)
	}
})
