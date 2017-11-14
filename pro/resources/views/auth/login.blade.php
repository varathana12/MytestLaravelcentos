
<html>

<head><title>title</title></head>
<body>
<form class="form-horizontal" method="POST" action="{{ route('login') }}">
    {{ csrf_field() }}

    <div id="login"></div>
</form>
</body>
<script type="text/javascript" src="js/app.js"></script>
</html>