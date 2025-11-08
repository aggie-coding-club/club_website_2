import { useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import eventsBannerImage from "../static/images/banners/events.JPG";
import accFestImage from "../static/images/events/accfest.jpg";
import workshopsImage from "../static/images/events/workshops.JPG";
import projectsImage from "../static/images/events/projects.JPG";
import socialsImage from "../static/images/events/socials.jpg";
import companyTalkImage from "../static/images/events/companytalk.jpg";
import projectathonImage from "../static/images/events/projectathon.JPG";
import studyGroupsImage from "../static/images/events/studygroups.JPG";

export default function EventsPage() {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      title: "Workshops",
      description:
        "Learn something new every week! Our workshops cover a wide range of topics from web development and mobile apps to data structures, algorithms, and emerging technologies. Perfect for all skill levels.",
      icon: "📚",
      image: workshopsImage,
    },
    {
      title: "Projects",
      description:
        "Create meaningful coding projects with other ACC members. Work in teams to build real-world applications, contribute to open source, and gain hands-on experience that enhances your portfolio.",
      icon: "💻",
      image: projectsImage,
    },
    {
      title: "Socials",
      description:
        "Get to know other coders through fun events and activities. From game nights and hackathons to study sessions and networking mixers, we foster a strong community of passionate developers.",
      icon: "🎉",
      image: socialsImage,
    },
    {
      title: "Company Talks",
      description:
        "Network and learn about companies each week. Industry professionals from top tech companies share insights, career advice, and opportunities. Great for internships, full-time positions, and mentorship.",
      icon: "🏢",
      image: companyTalkImage,
    },
    {
      title: "Projectathon",
      description:
        "An event held to help students finish their projects. Get dedicated time, resources, and support to complete your coding projects. Work alongside peers and get help from experienced members to push your projects across the finish line.",
      icon: "⚡",
      image: projectathonImage,
    },
    {
      title: "Study Groups",
      description:
        "Join study groups for technical interviews, coursework, and exam preparation. Learn together, share resources, and support each other in your academic and career journeys.",
      icon: "📖",
      image: studyGroupsImage,
    },
  ];

  const containerStyle = {
    margin: "60px auto",
    maxWidth: "1200px",
    padding: "0 20px",
  };

  const eventsGridStyle = {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    },
    gap: "30px",
    marginBottom: "60px",
  };

  const eventCardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
    },
  };

  const eventImageContainerStyle = {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  };

  const eventImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const eventContentStyle = {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  const titleStyle = {
    color: theme.palette.text.primary,
    fontSize: "24px",
    fontWeight: 600,
    margin: "0 0 12px 0",
    textAlign: "center",
  };

  const descriptionStyle = {
    color: theme.palette.text.primary,
    fontSize: "16px",
    lineHeight: 1.6,
    margin: 0,
    textAlign: "center",
  };

  const introStyle = {
    fontSize: "18px",
    lineHeight: 1.8,
    color: theme.palette.text.primary,
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 50px auto",
    padding: "0 20px",
  };

  const featuredEventContainerStyle = {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    gap: "40px",
    alignItems: "center",
    marginBottom: "60px",
    backgroundColor: theme.palette.info.main || "#EEF6FF",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  };

  const featuredImageContainerStyle = {
    flex: 1,
    width: "100%",
    maxWidth: {
      xs: "100%",
      lg: "500px",
    },
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const featuredImageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  };

  const featuredContentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const featuredTitleStyle = {
    color: theme.palette.text.primary,
    fontSize: "32px",
    fontWeight: 600,
    margin: "0 0 20px 0",
    textAlign: {
      xs: "center",
      lg: "left",
    },
  };

  const featuredDescriptionStyle = {
    color: theme.palette.text.primary,
    fontSize: "18px",
    lineHeight: 1.8,
    margin: 0,
    textAlign: {
      xs: "center",
      lg: "left",
    },
  };

  const imageBannerStyle = {
    width: "100vw",
    minHeight: "400px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "60px",
    marginLeft: "calc(-50vw + 50%)",
    marginRight: "calc(-50vw + 50%)",
    overflow: "hidden",
  };

  const bannerImageStyle = {
    position: "absolute",
    top: "0%",
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.5,
  };

  const bannerOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    opacity: 0.5,
  };

  const bannerTitleStyle = {
    position: "relative",
    zIndex: 1,
    color: "#ffffff",
    fontSize: "64px",
    fontWeight: 600,
    textAlign: "center",
    margin: 0,
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      <Box sx={imageBannerStyle}>
        <img
          src={eventsBannerImage}
          alt="Aggie Coding Club Events"
          style={bannerImageStyle}
        />
        <Box sx={bannerOverlayStyle} />
        <h1 style={bannerTitleStyle}>Events</h1>
      </Box>
      <Container maxWidth="lg">
        <Box sx={containerStyle}>
          <p style={introStyle}>
            Aggie Coding Club hosts a variety of events throughout the year to
            help you learn, grow, and connect with the tech community. Whether
            you're looking to build new skills, work on projects, network with
            companies, or just meet fellow coders, we have something for
            everyone!
          </p>
          <Box sx={featuredEventContainerStyle}>
            <Box sx={featuredImageContainerStyle}>
              <img
                src={accFestImage}
                alt="ACC Fest career fair"
                style={featuredImageStyle}
              />
            </Box>
            <Box sx={featuredContentStyle}>
              <h2 style={featuredTitleStyle}>ACC Fest</h2>
              <p style={featuredDescriptionStyle}>
                ACC Fest is a casual career fair staged directly outside the
                doors of the Texas A&M Zachry Engineering Complex. Sponsors set
                up under large, fan-cooled tents so they can meet students the
                moment classes let out. More than 800 students attended last
                year, and the event's success earned direct backing from the
                Texas A&M College of Engineering, which perennially ranks in the
                nation's Top 15. The relaxed outdoor setting and prime location
                let you engage with significantly more students at a fraction of
                the cost of traditional recruiting efforts.
              </p>
            </Box>
          </Box>
          <Box sx={eventsGridStyle}>
            {events.map((event, index) => (
              <Box
                key={index}
                sx={eventCardStyle}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <Box sx={eventImageContainerStyle}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={eventImageStyle}
                  />
                </Box>
                <Box sx={eventContentStyle}>
                  <h2 style={titleStyle}>{event.title}</h2>
                  <p style={descriptionStyle}>{event.description}</p>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
