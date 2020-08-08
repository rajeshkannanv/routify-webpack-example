<script>
	import { Router, basepath } from '@sveltech/routify';
	import { routes } from './generated_routes/routes.js';
	$basepath = '/myapp';
</script>

<Router {routes} />
