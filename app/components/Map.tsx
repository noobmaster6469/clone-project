import { MapPin } from "lucide-react";
import React from "react";

const Map: React.FC = () => {
  return (
    <div className="card-body pt-4 p-0">
      <iframe
        className="rounded-2xl overflow-hidden"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17829.32259802106!2d144.96920021090546!3d-37.81794892511605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2snp!4v1739169249422!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        <p className="mb-0 mt-2 fw-bold flex items-center gap-2">
          <MapPin />
          <span className=" font-bold">
            The Next Level Saloon, Pulchowk Road, Sanepa, Lalitpur, Bagmati
            Province
          </span>
        </p>
      </div>
    </div>
  );
};

export default Map;
