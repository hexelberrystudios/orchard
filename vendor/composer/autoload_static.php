<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf7945a1e97d4fcf895469add7bd2acbe
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Slim\\Views\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Slim\\Views\\' => 
        array (
            0 => __DIR__ . '/..' . '/slim/views',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
        'S' => 
        array (
            'Slim' => 
            array (
                0 => __DIR__ . '/..' . '/slim/slim',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf7945a1e97d4fcf895469add7bd2acbe::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf7945a1e97d4fcf895469add7bd2acbe::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitf7945a1e97d4fcf895469add7bd2acbe::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
