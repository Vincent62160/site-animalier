<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SiteAnimauxController extends AbstractController
{
    /**
     * @Route("/site/animaux", name="site_animaux")
     */
    public function index(): Response
    {
        return $this->render('site_animaux/index.html.twig', [
            'controller_name' => 'SiteAnimauxController',
        ]);
    }
}
