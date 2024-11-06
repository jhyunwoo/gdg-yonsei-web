// pages/[i]/page.tsx

import React, { FC } from 'react';
import Chip from '@/app/components/project-page/chip';
import CarouselComponent from '@/app/components/project-page/carouselComponent'
import Link from "next/link";

const projectData: {[key: string]: any}  = {
  name: 'Project Name',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla nulla sit amet feugiat elementum. Donec facilisis pretium vulputate. Vestibulum quis elit ex. Quisque molestie dui nec faucibus condimentum. Morbi convallis dapibus tortor id volutpat. In hac habitasse platea dictumst. Maecenas eu quam quis eros fermentum consectetur. Fusce et justo vel diam vehicula condimentum.',
  contributors: ['김구글', '박구글', '윤구글'],
};

const images: string[] = [
  'https://flowbite.com/docs/images/carousel/carousel-1.svg',
  'https://flowbite.com/docs/images/carousel/carousel-2.svg',
  'https://flowbite.com/docs/images/carousel/carousel-3.svg',
  // Add more image URLs as needed
];

const ProjectDescPage: FC = () => {
  return (
    <section className={'min-h-[400px] m-2 mt-[90px]'}>
      {/* Page header */}
      <div className={'w-[70%] max-w-[1300px] mx-auto my-2'}>
          <h1 className={'text-4xl font-bold'}>{projectData['name']}</h1>
      </div>
      <hr></hr>
      {/* Project Description */}
      <div className={'w-[70%] max-w-[1300px] mx-auto'}>
        <div className="flex flex-col gap-4">
            {/* Carousel */}
            <CarouselComponent images={images}></CarouselComponent>
            
            {/* TODO Mini carousel for image selection */}

            {/* Contributors */}
            <h1 className={"text-2xl"}>Contributors</h1>
            <div className={'flex flex-row gap-2'}>
              {projectData['contributors'].map((contributor: string, index: string) => (
                <Chip key={index} text={contributor} />
              ))}
            </div>
            <h1 className={"text-2xl"}>About this project</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla nulla sit amet feugiat elementum. Donec facilisis pretium vulputate. Vestibulum quis elit ex. Quisque molestie dui nec faucibus condimentum. Morbi convallis dapibus tortor id volutpat. In hac habitasse platea dictumst. Maecenas eu quam quis eros fermentum consectetur. Fusce et justo vel diam vehicula condimentum.

              Nulla consectetur, velit eget sollicitudin vehicula, mi lectus aliquam elit, rutrum pulvinar magna odio non ipsum. Fusce sed faucibus ligula. Maecenas et vehicula mi. Cras bibendum aliquet eros, et maximus enim ultrices a. Etiam ac diam rhoncus, lobortis tellus eu, bibendum elit. Vestibulum posuere consequat mauris convallis molestie. Nunc semper velit risus, eget tempus metus sodales aliquam. Sed faucibus semper eros, vitae ultricies diam fringilla ut.

              Phasellus non bibendum nunc. Ut aliquam finibus ante nec fringilla. Nulla non nisl nec metus malesuada blandit sit amet et urna. Nulla eget elementum ligula. Duis pellentesque orci nec nisl vulputate, a ornare magna pellentesque. Quisque euismod tincidunt sapien eu sagittis. Integer nunc metus, scelerisque mollis nunc et, tincidunt porta urna.

              In orci enim, volutpat eget hendrerit in, congue nec urna. Nulla consectetur condimentum tellus, non iaculis risus sodales vel. Vivamus ac ipsum diam. Nam purus neque, mattis id ultrices pharetra, ullamcorper molestie est. Vivamus ut orci elit. Cras erat arcu, viverra vel metus vel, maximus ultrices felis. Nulla nec pellentesque sapien. Quisque elementum magna sollicitudin efficitur venenatis. Sed nec auctor turpis. Sed luctus rutrum dolor, eget pretium odio ullamcorper ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

              Ut semper urna tristique tristique ultricies. Curabitur et leo eros. Proin quis est eu dui dictum maximus ut non purus. Phasellus ullamcorper, erat quis cursus aliquam, augue mauris vestibulum sapien, id elementum dui augue eu ipsum. Duis sagittis nisl nec libero luctus, at vestibulum risus laoreet. Ut sed lacus nec leo tincidunt molestie ut non ligula. Donec eu mattis sapien, sed rutrum tellus. Praesent nec commodo justo. Maecenas porttitor erat leo, quis gravida ligula convallis in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac semper eros. Phasellus eu egestas sem. Duis sed ligula ut velit tempus dapibus et et est. Sed mollis nisi eu lectus pharetra dignissim. Praesent fermentum mollis tortor faucibus iaculis.
            <h1 className={"text-2xl"}>Links</h1>
            <Link href={"/projects"} className={"hover:underline"}>(Example) Back to projects</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescPage;