<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request as FacadesRequest;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/healthcheck', function(){
    return response()->json([
        "message" => "Successfully pinged from " . FacadesRequest::ip()
    ], 200);
});

Route::post('/loopback', function(Request $request) {
    return response()->json([
        "message" => "Message received: " . $request->message
    ], 200);
});