<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PostRepository;

class ForumChienController extends AbstractController
{
    /**
     * @Route("/forum/chien", name="forum_chien")
     */
    public function index(PostRepository $postRepository): Response
    {
        return $this->render('forum_chien/index.html.twig', [
            'controller_name' => 'ForumChienController',
            'posts' => $postRepository->findAll(),
        ]);
    }
}
