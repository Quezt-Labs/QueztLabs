"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = {
  grindkaro: {
    name: "Grind Karo",
    description: "Performance-first powerlifting coaching platform",
    url: "https://www.grindkaro.in/",
    images: [
      { src: "/assests/GrindKaro.png", title: "Grind Karo — Home" },
      { src: "/assests/GrindKaro_Modal.png", title: "Grind Karo — Modal" },
      { src: "/assests/GrindKaro_Pricing.png", title: "Grind Karo — Pricing" },
    ],
  },
  fitforward: {
    name: "Fit Forward",
    description: "Fitness coaching and trainer management platform",
    url: "#",
    images: [
      { src: "/assests/Fit_Forward.png", title: "Fit Forward — Home" },
      {
        src: "/assests/Fit_Forward_Trainer_Dashboard.png",
        title: "Trainer Dashboard",
      },
      {
        src: "/assests/Fit_Forward_Trainer_Reviews.png",
        title: "Trainer Reviews",
      },
      {
        src: "/assests/Fit_Forward_Trainer_Client_Dashboard.png",
        title: "Client Dashboard",
      },
      {
        src: "/assests/Fit_Forward_Trainer_Client_Workout.png",
        title: "Client Workout",
      },
      {
        src: "/assests/Fit_Forward_Client_Dashboard.png",
        title: "Client Dashboard",
      },
      {
        src: "/assests/Fit_Forward_Client_Workout.png",
        title: "Client Workout View",
      },
      {
        src: "/assests/Fit_Forward_Client_Progress.png",
        title: "Progress Tracking",
      },
      {
        src: "/assests/Fit_Forward_Client_Nutrition.png",
        title: "Nutrition Plans",
      },
    ],
  },
  testforce: {
    name: "TestForce",
    description: "Platform for students to practice and compete",
    url: "https://www.testforce.online/",
    images: [
      { src: "/assests/Test_Force_Home_Page.png", title: "TestForce — Home" },
      { src: "/assests/Test_Force_Teacher.png", title: "Teacher Dashboard" },
      { src: "/assests/Test_Force_Student.png", title: "Student Dashboard" },
      { src: "/assests/Test_Engine.png", title: "Test Engine" },
    ],
  },
};

export default function ClientsSection() {
  const [activeProject, setActiveProject] =
    useState<keyof typeof projects>("grindkaro");

  return (
    <section id="clients" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Featured projects we've shipped
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by startups and teams building products end-to-end
          </p>
        </div>

        {/* Project tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {(Object.keys(projects) as Array<keyof typeof projects>).map(
            (key) => (
              <button
                key={key}
                onClick={() => setActiveProject(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeProject === key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background border border-muted hover:border-primary/50"
                }`}
              >
                {projects[key].name}
              </button>
            )
          )}
        </div>

        {/* Active project details */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold">
            {projects[activeProject].name}
          </h3>
          <p className="text-muted-foreground mt-2">
            {projects[activeProject].description}
          </p>
        </div>

        {/* Screenshot gallery for active project */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects[activeProject].images.map((item, idx) => (
              <Thumbnail
                key={item.src}
                src={item.src}
                title={item.title}
                index={idx}
                projectKey={activeProject}
              />
            ))}
          </div>

          {/* Lightbox dialog (controlled) */}
          <GalleryLightbox activeProject={activeProject} />
        </div>
      </div>
    </section>
  );
}

// --- Lightbox + thumbnail helpers ---
function Thumbnail({
  src,
  title,
  index,
  projectKey,
}: {
  src: string;
  title: string;
  index: number;
  projectKey: string;
}) {
  // open lightbox by dispatching custom event with index and project
  const open = () => {
    window.dispatchEvent(
      new CustomEvent("open-gallery", { detail: { index, projectKey } })
    );
  };

  return (
    <button
      onClick={open}
      className="group relative rounded-xl overflow-hidden bg-background border border-muted hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      aria-label={title}
    >
      <div className="relative w-full aspect-video">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-4 bg-background">
        <h3 className="text-sm font-medium line-clamp-1 text-foreground">
          {title}
        </h3>
      </div>
    </button>
  );
}

function GalleryLightbox({
  activeProject,
}: {
  activeProject: keyof typeof projects;
}) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(activeProject);
  const [api, setApi] = useState<any | null>(null);

  useEffect(() => {
    const handler = (e: any) => {
      setStartIndex(e.detail.index ?? 0);
      setCurrentProject(e.detail.projectKey ?? activeProject);
      setOpen(true);
    };
    window.addEventListener("open-gallery", handler as EventListener);
    return () =>
      window.removeEventListener("open-gallery", handler as EventListener);
  }, [activeProject]);

  useEffect(() => {
    if (!api) return;
    try {
      api.scrollTo(startIndex);
    } catch {
      //
    }
  }, [api, startIndex]);

  const slides = projects[currentProject].images;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[95vw]! lg:max-w-7xl w-[95vw]! lg:w-[90vw] h-auto max-h-[95vh] p-0 bg-black/95 border-0 gap-0 overflow-hidden">
        <div className="w-full h-full p-4 lg:p-8">
          <div className="mb-4 text-center">
            <DialogTitle className="text-xl lg:text-2xl font-bold text-white">
              {projects[currentProject].name}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-400 mt-1">
              {slides.length} screenshots
            </DialogDescription>
          </div>
          <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 lg:-ml-4">
              {slides.map((s) => (
                <CarouselItem key={s.src} className="pl-2 lg:pl-4">
                  <div className="relative w-full h-[60vh] lg:h-[75vh] rounded-lg overflow-hidden bg-black">
                    <Image
                      src={s.src}
                      alt={s.title}
                      fill
                      className="object-contain"
                      quality={95}
                      priority
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-sm lg:text-base font-medium text-white">
                      {s.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:left-4 bg-white/90 hover:bg-white text-black border-0" />
            <CarouselNext className="right-2 lg:right-4 bg-white/90 hover:bg-white text-black border-0" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
