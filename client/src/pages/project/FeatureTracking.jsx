import { Steps } from 'rsuite';
import "../../styles/FeatureTracking.css";
import features from "../../db/features.json";

export default function FeatureTracking() {

  return (
    <div className="feature-tracking-page">
      <h1 className="feature-page-title">Features</h1>
      <div className="features-container">
        <div className="feature-container">
          <div className="feature-name"></div>
          <div className="feature-steps">
            <Steps>
              <div className="step-title">Pending</div>
              <div className="step-title">Development</div>
              <div className="step-title">Testing</div>
              <div className="step-title">Completed</div>
            </Steps>
          </div>
        </div>
        {
          features.map(feature => {
            return (
              <div key={feature.id} className="feature-container">
                <div className="feature-name">{feature.name}</div>
                <div className="feature-steps">
                  <Steps current={feature.progress}>
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                    <Steps.Item />
                  </Steps>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}