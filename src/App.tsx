import {
    Theme,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Card,
    Grid,
    Badge,
    Link,
    Separator,
} from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"

export default function IndexPage() {
    return (
        <Theme
            appearance="light"
            accentColor="indigo"
            grayColor="gray"
            radius="medium"
            scaling="100%"
        >
            <Flex direction="column" gap="9">

                {/* Header */}
                <Flex
                    asChild
                    justify="between"
                    align="center"
                    px="6"
                    py="4"
                >
                    <header>
                        <Heading size="4">Gabriel</Heading>

                        <Flex gap="4">
                            <Link href="#projects">Projects</Link>
                            <Link href="#skills">Skills</Link>
                            <Link href="#contact">Contact</Link>
                        </Flex>
                    </header>
                </Flex>

                <Separator />

                {/* Hero */}
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    gap="4"
                    px="6"
                    py="9"
                >
                    <Heading size="8" align="center">
                        Full-Stack Software Engineer
                    </Heading>

                    <Text size="4" align="center" color="gray">
                        I build scalable web applications using Python, Django, React,
                        Vite, and Docker.
                    </Text>

                    <Flex gap="3" mt="4">
                        <Button asChild size="3">
                            <a href="#projects">View Projects</a>
                        </Button>

                        <Button asChild size="3" variant="outline">
                            <a
                                href="https://github.com/DimensionalArray"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </Button>
                    </Flex>
                </Flex>

                {/* Projects */}
                <Box id="projects" px="6">
                    <Heading size="6" mb="5">
                        Projects
                    </Heading>

                    <Grid columns={{ initial: "1", md: "2" }} gap="5">
                        <Card>
                            <Heading size="4">Chat Application</Heading>
                            <Text size="2" color="gray" mt="2">
                                Full-stack real-time chat app with Django, React,
                                WebSockets, and Docker.
                            </Text>

                            <Flex gap="2" mt="3" wrap="wrap">
                                <Badge>Python</Badge>
                                <Badge>Django</Badge>
                                <Badge>React</Badge>
                                <Badge>Docker</Badge>
                            </Flex>

                            <Flex gap="3" mt="4">
                                <Link href="https://github.com/DimensionalArray/Chatbot">
                                    GitHub
                                </Link>
                                <Link href="#">Live Demo</Link>
                            </Flex>
                        </Card>

                        <Card>
                            <Heading size="4">Admin Dashboard</Heading>
                            <Text size="2" color="gray" mt="2">
                                Role-based admin dashboard with REST APIs and
                                responsive UI.
                            </Text>

                            <Flex gap="2" mt="3" wrap="wrap">
                                <Badge>Django REST</Badge>
                                <Badge>React</Badge>
                                <Badge>TypeScript</Badge>
                            </Flex>

                            <Flex gap="3" mt="4">
                                <Link href="#">GitHub</Link>
                            </Flex>
                        </Card>
                    </Grid>
                </Box>

                {/* Skills */}
                <Box id="skills" px="6">
                    <Heading size="6" mb="5">
                        Skills
                    </Heading>

                    <Grid columns={{ initial: "1", sm: "2", md: "4" }} gap="4">
                        <Card>
                            <Heading size="3">Backend</Heading>
                            <Text size="2" color="gray" mt="2">
                                Python, Django, Django REST Framework
                            </Text>
                        </Card>

                        <Card>
                            <Heading size="3">Frontend</Heading>
                            <Text size="2" color="gray" mt="2">
                                React, Vite, TypeScript, HTML, CSS
                            </Text>
                        </Card>

                        <Card>
                            <Heading size="3">DevOps</Heading>
                            <Text size="2" color="gray" mt="2">
                                Docker, Docker Compose
                            </Text>
                        </Card>

                        <Card>
                            <Heading size="3">Tools</Heading>
                            <Text size="2" color="gray" mt="2">
                                Git, GitHub, Linux
                            </Text>
                        </Card>
                    </Grid>
                </Box>

                {/* About */}
                <Box px="6">
                    <Heading size="6" mb="4">
                        About Me
                    </Heading>

                    <Text size="3" color="gray">
                        I enjoy working across the stack, from designing clean APIs
                        to building accessible and responsive user interfaces.
                        I care about maintainable code, thoughtful architecture,
                        and real-world usability.
                    </Text>
                </Box>

                {/* Footer / Contact */}
                <Separator />

                <Flex
                    id="contact"
                    direction="column"
                    align="center"
                    gap="3"
                    px="6"
                    py="6"
                >
                    <Text size="2" color="gray">
                        Get in touch
                    </Text>

                    <Flex gap="4">
                        <Link href="mailto:your@email.com">Email</Link>
                        <Link href="https://github.com/DimensionalArray">GitHub</Link>
                    </Flex>
                </Flex>
            </Flex>
        </Theme>
    )
}