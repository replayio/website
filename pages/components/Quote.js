export default function Quote({ content, name, position, picture, style }) {
    return (
        <div
            class={`max-w-7xl mx-auto md:grid md:grid-cols-1 p-8 rounded-md ${style}`}
        >
            <div class="md:flex md:flex-col">
                <blockquote class="md:flex-grow text-xl md:flex md:flex-col space-y-6">
                    <div class="relative italic text-gray-500 md:flex-grow">
                        <p class="relative py-0">{content}</p>
                    </div>
                    <footer>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 inline-flex rounded-full">
                                <img
                                    class="h-12 w-12 rounded-full"
                                    src={picture}
                                    alt=""
                                />
                            </div>
                            <div class="text-xl font-medium ml-4">
                                <div class="text-gray-500">{name}</div>
                                <div class="text-gray-400">{position}</div>
                            </div>
                        </div>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
}
