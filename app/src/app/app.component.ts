import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  state = 'expanded';
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/',
      icon: 'home-outline'
    },
    {
      title: 'Heroes',
      link: '/heroes',
      icon: 'people-outline'
    },
    {
      title: 'Abilities',
      link: '/abilities',
      icon: 'sun-outline'
    }
  ];
  heroes = [{
    id: 1,
    name: 'Superman',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
    powerRating: 90,
    abilityIds: [1, 3, 11],
    description: `Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in Action Comics #1, a comic book published on April 18, 1938.[1] The character regularly appears in comic books published by DC Comics, and has been adapted to a number of radio serials, movies, and television shows.

Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin. His foster parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime as a vigilante. To protect his privacy, he changes into a colorful costume and uses the alias "Superman" when fighting crime. Clark Kent resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet. Superman's supporting characters include his love interest and fellow journalist Lois Lane, Daily Planet photographer Jimmy Olsen and editor-in-chief Perry White. His most well-known villain is Lex Luthor. Superman is part of the DC Universe, and as such often appears in stories alongside other DC Universe heroes such as Batman and Wonder Woman.

Although Superman was not the first superhero character, he popularized the superhero archetype and defined its conventions. Superheroes are usually judged by how closely they resemble the standard established by Superman. He remains the best selling superhero in comic books of all time[2] and endured as one of the most lucrative franchises even outside of comic books.`
  },
  {
    id: 2,
    name: 'Batman',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png',
    powerRating: 44,
    abilityIds: [2, 4, 18],
    description: `Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,[2][3] and first appeared in Detective Comics #27 in 1939. Originally named the "Bat-Man," the character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective.[6]

Batman's secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.[7]

Batman operates in the fictional Gotham City with assistance from various supporting characters, including his butler Alfred, police commissioner Jim Gordon, and vigilante allies such as Robin. Unlike most superheroes, Batman does not possess any inhuman superpowers. He does, however, possess a genius-level intellect, is a peerless martial artist, and his vast wealth affords him an extraordinary arsenal of weaponry and equipment. A large assortment of villains make up Batman's rogues gallery, including his nemesis, the Joker.

The character became popular soon after his introduction in 1939 and gained his own comic book title, Batman, the following year. As the decades went on, different interpretations of the character emerged. The late 1960s Batman television series used a camp aesthetic, which continued to be associated with the character for years after the show ended. Various creators worked to return the character to his dark roots, culminating in 1986 with The Dark Knight Returns by Frank Miller. The success of Warner Bros. Pictures' live-action Batman feature films have helped maintain the character's prominence in mainstream culture.[8]

Batman has been licensed and featured in various adaptations, from radio to television and film, and appears in merchandise sold around the world, such as apparel, toys, and video games. Kevin Conroy, Rino Romano, Anthony Ruivivar, Peter Weller, Bruce Greenwood, Jason O'Mara, and Will Arnett, among others, have provided the character's voice for animated adaptations. Batman has been depicted in both film and television by Lewis Wilson, Robert Lowery, Adam West, Michael Keaton, Val Kilmer, George Clooney, Bruce Thomas, Christian Bale, Ben Affleck, David Mazouz, Iain Glen, and Jim Broadbent. Robert Pattinson will portray the character in the upcoming 2021 film, The Batman.`
  }
  ];
}
