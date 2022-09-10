<head>
  <meta charset="utf-8">
  <title>{{config('app.name')}} - @yield('title')</title>
  <meta name="description" content="Kunjungin Admin Panel">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700"
    rel="stylesheet">
  <link href="{{ asset('plugins/global/plugins.bundle.css') }}" rel="stylesheet" type="text/css">
  <link href="{{ asset('css/style.bundle.css') }}" rel="stylesheet" type="text/css">
  <link href="{{ asset('css/skins/header/base/light.css') }}" rel="stylesheet" type="text/css">
  <link href="{{ asset('css/skins/header/menu/light.css') }}" rel="stylesheet" type="text/css">
  <link href="{{ asset('css/skins/brand/dark.css') }}" rel="stylesheet" type="text/css">
  <link href="{{ asset('css/skins/aside/dark.css') }}" rel="stylesheet" type="text/css">
  @yield('page_style')
  <link rel="shortcut icon" href="{{ asset('img/dpmptsp-mks.png') }}">
</head>
