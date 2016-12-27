<?php
/**
 * Step 1: Require the Slim Framework
 *
 * If you are not using Composer, you need to require the
 * Slim Framework and register its PSR-0 autoloader.
 *
 * If you are using Composer, you can skip this step.
 */
require '../vendor/autoload.php';
require '../vendor/PHPMailer/PHPMailerAutoload.php';


\Slim\Slim::registerAutoloader();
/*
function connect_db() {
	$hostname = 'mysql.howdidigethere.info'; // this may be an ip address instead
	$username = 'pernileon';
	$password = 'crimsonknightscheeseportal';
	$database = 'how_db';
    
    //$connection = mysql_connect($hostname,$username,$password);
    //mysql_select_db($database) or die("Unable to select database");
	$connection = new mysqli($hostname, $username, $password, $database);
    
	return $connection;
}
*/

/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */
$app = new \Slim\Slim(array(
    'templates.path' => '../templates',
    'view' => new \Slim\Views\Twig(),
    'debug' => true
));

$view = $app->view();
$view->parserOptions = array(
    'debug' => false
    //'cache' => dirname(__FILE__) . '/cache',
);

$view->parserExtensions = array(
    new \Slim\Views\TwigExtension()
);

/**
 * Step 3: Define the Slim application routes
 *
 * Here we define several Slim application routes that respond
 * to appropriate HTTP request methods. In this example, the second
 * argument for `Slim::get`, `Slim::post`, `Slim::put`, `Slim::patch`, and `Slim::delete`
 * is an anonymous function.
 */

// @TODO: replace with /update
/*
$app->get(
    '/',
    function () use ($app) {
        $latestIdx = $app->latestIdx;
        $app->render('update.html', array('title' => 'How Did I Get Here?',
                                          'styleName' => 'bstation',
                                          'currentIdx' => $latestIdx,
                                          'previousIdx' => $latestIdx - 1,
                                          'nextIdx' => $latestIdx + 1,
                                          'leftLink' => 'log',
                                          'leftLabel' => 'Log',
                                          'rightLink' => 'news',
                                          'rightLabel' => 'News'));
    }
);
*/

$app->get(
    '/500',
    function () use ($app) {
        $app->render('500.html');
    }
);

$app->get(
    '/404',
    function () use ($app) {
        $app->render('404.html');
    }
);

$app->get(
    '/',
    function () use ($app) {
        $app->render('home.html', array('styleName' => 'bstation'));
    }
);

$app->get(
    '/add',
    function () use ($app) {
        $app->render('add.html');
    }
);

$app->get(
    '/new-template',
    function () use ($app) {
        $app->render('new-template.html');
    }
);

$app->post(
    '/new-item',
    function () use ($app) {
        // @TODO: show submitted template name
        // @TODO: show submitted list of fields
        $numFields = 1;
        $fields = array();
        
        while (isset($_POST['field_label_'.$numFields])) {
            $fields[] = array('label' => $_POST['field_label_'.$numFields],
                              'type' => $_POST['field_type_'.$numFields],
                              'id' => $_POST['field_'.$numFields]);
        }
        
        $app->render('new-item.html', array('templateName' => $_POST['template_name'],
                                            'fields' => $fields));
    }
);

$app->get(
    '/new-item',
    function () use ($app) {
        $app->render('new-item.html');
    }
);

$app->get(
    '/choose-item',
    function () use ($app) {
        $app->render('choose-item.html');
    }
);

/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
